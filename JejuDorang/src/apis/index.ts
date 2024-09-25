import { useAuthStore } from '@states/useAuthStore';
import { API_URL } from '@constants/url';
import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
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
  // client.interceptors.response.use(
  //   (response) => response,
  //   async (error: AxiosError) => {
  //     if (error.response?.status === 403) {
  //       const newAccessToken = await getRefreshToken();
  //       if (newAccessToken) {
  //         useAuthStore.getState().setAccessToken(newAccessToken);
  //         if (error.config) {
  //           error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
  //           return client(error.config);
  //         }
  //       } else {
  //         useAuthStore.getState().logout();
  //         window.location.href = '/login';
  //         return Promise.reject(error);
  //       }
  //     }
  //     return Promise.reject(error);
  //   },
  // );

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
