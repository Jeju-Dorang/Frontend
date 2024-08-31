import { useAuthStore } from '@states/useAuthStore';
import { API_URL } from '@constants/url';
import axios, { AxiosResponse } from 'axios';

const $axios = (requiredToken: boolean) => {
  const client = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (requiredToken) {
    client.interceptors.request.use((config) => {
      const token = useAuthStore.getState().token;
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });
  }

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

  get: async <T,>(
    requiredToken: boolean,
    url: string,
  ): Promise<AxiosResponse<T>> => {
    return $axios(requiredToken).get<T>(url);
  },

  patch: async <T, P>(
    requiredToken: boolean,
    url: string,
    data: P,
  ): Promise<AxiosResponse<T>> => {
    return $axios(requiredToken).patch<T>(url, data);
  },

  delete: async <T,>(
    requiredToken: boolean,
    url: string,
  ): Promise<AxiosResponse<T>> => {
    return $axios(requiredToken).delete<T>(url);
  },
};

export { api };
