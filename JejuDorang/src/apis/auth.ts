import { api } from './index';
import { useAuthStore } from '@states/useAuthStore';

export const getToken = async (code: string): Promise<boolean> => {
  try {
    const response = await api.get<void>(
      false,
      `/auth/kakao/login?code=${code}`,
    );

    const accessToken = response.headers['access-token'];
    const refreshToken = response.headers['refresh-token'];

    if (accessToken && refreshToken) {
      useAuthStore.getState().setAccessToken(accessToken);
      useAuthStore.getState().setRefreshToken(refreshToken);
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
