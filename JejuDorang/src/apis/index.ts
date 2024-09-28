import { useAuthStore } from '@states/useAuthStore';
import { API_URL } from '@constants/url';
import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { getRefreshToken } from './auth';

const $axios = (requiredToken: boolean): AxiosInstance => {
  const client = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (requiredToken) {
    client.interceptors.request.use((config) => {
      const token = useAuthStore.getState().accessToken;
      if (token) {
        config.headers.accessToken = token;
      }
      return config;
    });
  }
  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };
      if (error.response?.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newAccessToken = await getRefreshToken();
          useAuthStore.getState().setAccessToken(newAccessToken);
          if (originalRequest.headers) {
            originalRequest.headers.accessToken = newAccessToken;
          }
          return client(originalRequest);
        } catch (refreshError) {
          alert('로그인 세션이 만료되었습니다.\n다시 로그인 하시길 바랍니다.');
          useAuthStore.getState().logout();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    },
  );

  return client;
};

const api = {
  post: async <T, P>(
    requiredToken: boolean,
    url: string,
    data: P,
  ): Promise<AxiosResponse<T>> => {
    return $axios(requiredToken).post<T>(url, data);
  },

  get: async <T>(
    requiredToken: boolean,
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    return $axios(requiredToken).get<T, AxiosResponse<T>>(url, config);
  },

  patch: async <T, P>(
    requiredToken: boolean,
    url: string,
    data: P,
  ): Promise<AxiosResponse<T>> => {
    return $axios(requiredToken).patch<T>(url, data);
  },

  delete: async <T>(
    requiredToken: boolean,
    url: string,
  ): Promise<AxiosResponse<T>> => {
    return $axios(requiredToken).delete<T>(url);
  },
};

export { api };
