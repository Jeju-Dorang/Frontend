import { api } from './index';
import { useAuthStore } from '@states/useAuthStore';

export const getToken = async (code: string): Promise<boolean> => {
  try {
    const response = await api.get<void>(
      false,
      `/auth/kakao/login?code=${code}`,
    );
    const token = response.headers['authorization'];

    if (token) {
      useAuthStore.getState().setToken(token);
      return true;
    } else {
      console.error('Token not found in the response headers');
      return false;
    }
  } catch (error) {
    console.error('Kakao login failed:', error);
    return false;
  }
};