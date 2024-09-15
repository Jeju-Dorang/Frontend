import { api } from './index';

export const searchPost = async (searchString: string) => {
  try {
    // const response = await api.get<void>(
    //   false,
    //   ``,
    // );
  } catch (error) {
    console.error('Kakao login failed:', error);
    return;
  }
};
