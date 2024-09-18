import { api } from './index';
import { Information } from '@type/information';

const getMain = async (): Promise<Information | null> => {
  try {
    const response = await api.get<Information>(true, `/`);
    return response.data;
  } catch (error) {
    console.error('Failed to get main:', error);
    return null;
  }
};

export { getMain };
