import { api } from './index';
import { Information } from '@type/information';
import { dorangEquipItem, dorangItem } from '@type/dorangItem';

const getMain = async (): Promise<Information | null> => {
  try {
    const response = await api.get<Information>(true, `/`);
    return response.data;
  } catch (error) {
    console.error('Failed to get main:', error);
    return null;
  }
};

const getDorangItems = async (): Promise<dorangItem | null> => {
  try {
    const response = await api.get<dorangItem>(true, `/character/items`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const postDorangItems = async (data: dorangEquipItem): Promise<boolean> => {
  try {
    await api.post(true, `/character/items`, data);
    return true;
  } catch (error) {
    return false;
  }
};

export { getMain, getDorangItems, postDorangItems };
