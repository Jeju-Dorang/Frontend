import axios from 'axios';
import { api } from './index';
import { useAuthStore } from '@states/useAuthStore';
import { API_URL } from '@constants/url';

const getAccessToken = async (code: string): Promise<boolean> => {
  try {
    const response = await api.get<void>(
      false,
      `/auth/kakao/login?code=${code}`,
    );

    const accessToken = response.headers['access-token'];
    const refreshToken = response.headers['refresh-token'];

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

const getRefreshToken = async (): Promise<string | null> => {
  try {
    const refreshToken = useAuthStore.getState().refreshToken;
    if (!refreshToken) {
      throw new Error('Refresh token not found');
    }
    const response = await axios.get(`${API_URL}/auth/token/refresh`, {
      headers: {
        'refreshToken': refreshToken,
      },
    });
    const newAccessToken = response.data.accessToken;
    if (newAccessToken) {
      return newAccessToken;
    } else {
      throw new Error('New access token not found in the response');
    }
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
};

export { getAccessToken, getRefreshToken };
