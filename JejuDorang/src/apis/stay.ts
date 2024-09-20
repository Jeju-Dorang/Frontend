import { api } from './index';
import { Stays } from '@type/Stays';

const getStays = async (
  direction: string,
  type: string,
  price: number,
): Promise<Stays[] | null> => {
  try {
    const response = await api.get<Stays[]>(
      true,
      `/lodging/recommendations?direction=${direction}&type=${type}&price=${price}`,
    );
    return response.data;
  } catch (error) {
    console.error('Kakao login failed:', error);
    return null;
  }
};

export { getStays };
