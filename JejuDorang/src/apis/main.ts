import { api } from './index';
import { Information } from '@type/information';
import { useAuthStore } from '@states/useAuthStore';
import { dorangItem } from '@type/dorangItem';

const getMain = async (): Promise<boolean> => {
  try {
    const response = await api.get<Information>(true, `/`);
    if (response.data) {
      const {
        setMemberName,
        setMemberComment,
        setMemberImage,
        setCharacterImage,
        setAchievement,
      } = useAuthStore.getState();
      setMemberName(response.data.memberName);
      setMemberComment(response.data.memberComment);
      setMemberImage(response.data.memberImage);
      setCharacterImage(response.data.characterImage);
      setAchievement(response.data.achievement);
    }
    return true;
  } catch (error) {
    console.error('Failed to get main:', error);
    return false;
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

export { getMain, getDorangItems };
