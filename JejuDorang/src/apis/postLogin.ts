import { api } from './index';
import { useAuthStore } from '@states/useAuthStore';

export const postLogin = async () => {
  return await api
    .post<string, null>(false, '/auth/kakao/login', null)
    .then((res) => {
      if (res.status === 200) {
        useAuthStore.setState({ token: res.data });
        return true;
      }
    })
    .catch(() => {
      return false;
    });
};
