import { api } from './index';
import { useAuthStore } from '@states/useAuthStore';

interface KakaoLoginResponse {
  token: string;
}

export const getToken = async (code: string): Promise<boolean> => {
  return api
    .get<KakaoLoginResponse>(false, ``)
    .then((response) => {
      if (response.data && response.data.token) {
        useAuthStore.getState().setToken(response.data.token);
        return true;
      } else {
        console.error('Token not found in the response');
        return false;
      }
    })
    .catch((error) => {
      console.error('Kakao login failed:', error);
      return false;
    });
};
