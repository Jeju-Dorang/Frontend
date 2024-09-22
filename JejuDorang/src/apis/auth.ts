import { api } from './index';
import { useAuthStore } from '@states/useAuthStore';

const getAccessToken = async (code: string): Promise<boolean> => {
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
    if (accessToken && refreshToken) {
      useAuthStore.getState().logout();
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

const getRefreshToken = async (): Promise<string> => {
  try {
    const refreshToken = useAuthStore.getState().refreshToken;
    if (!refreshToken) {
      throw new Error('Refresh token not found');
    }
    const response = await api.get<{ accessToken: string }>(
      false,
      '/auth/token/refresh',
      {
        headers: {
          'Refresh-Token': refreshToken,
        },
      },
    );
    const newAccessToken = response.data.accessToken;
    if (newAccessToken) {
      return newAccessToken;
    } else {
      throw new Error('New access token not found in the response');
    }
  } catch (error) {
    console.error('Token refresh failed:', error);
    return '';
  }
};

export { getAccessToken, getRefreshToken };
