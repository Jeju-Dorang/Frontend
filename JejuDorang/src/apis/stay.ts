import { api } from './index';
import { Lodging, Stays } from '@type/Stays';

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
    return null;
  }
};

const getStay = async (lodgingId: number): Promise<Lodging | null> => {
  try {
    const response = await api.get<Lodging>(
      true,
      `/lodging/recommendation/${lodgingId}`,
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const postSaveStay = async (lodgingId: number): Promise<boolean> => {
  try {
    await api.post(true, `/lodging/${lodgingId}`, null);
    return true;
  } catch (error) {
    return false;
  }
};

export { getStays, getStay, postSaveStay };
