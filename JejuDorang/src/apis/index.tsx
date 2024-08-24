import { useAuthStore } from '@states/useAuthStore';

function handleError(status: number, message: string) {
  throw new Error(`${status}: ${message}`);
}

const HTTPMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export const kakaoAuth = () => {
  window.location.href = KAKAO_AUTH_URL;
};

async function request<T>(
  url: string,
  config: RequestInit,
  body?: BodyInit,
): Promise<T> {
  const needToken = !(url.includes(`login`) || url.includes(`signup`));
  const options = { ...config, body };

  if (needToken) {
    const token = useAuthStore.getState().token;
    options.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  } else {
    options.headers = { 'Content-Type': 'application/json' };
  }

  const response = await fetch(`/api${url}`, {
    ...options,
    credentials: 'include',
  });
  if (!response.ok) {
    response.json().then((res) => console.log(res));
    handleError(response.status, response.statusText);
  }
  return response.json();
}

export const apiClient = {
  get: <TResponse,>(url: string): Promise<TResponse> =>
    request<TResponse>(url, { method: HTTPMethods.GET }),

  post: <TResponse, TBody>(
    url: string,
    bodyObject?: TBody,
  ): Promise<TResponse> => {
    const body = JSON.stringify(bodyObject);
    return request<TResponse>(url, { method: HTTPMethods.POST }, body);
  },

  delete: <T,>(url: string): Promise<T> =>
    request<T>(url, { method: HTTPMethods.DELETE }),

  put: <T, U>(url: string, bodyObject?: U): Promise<T> => {
    const body = JSON.stringify(bodyObject);
    return request<T>(url, { method: HTTPMethods.PUT }, body);
  },
};

// 사용법
// return await apiClient.get<authResponse>(`/oauth/login/kakao?code=${code}`);

// return await apiClient.post(`/nags/${actionInfo.nagId}/actions`, {
// 	content: actionInfo.content,
//   });
