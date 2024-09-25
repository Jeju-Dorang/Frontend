import { api } from './index';
import { Information } from '@type/information';
import { useAuthStore } from '@states/useAuthStore';

const getMain = async (): Promise<boolean> => {
  try {
    const response = await api.get<Information>(true, `/`);
    if (response.data) {
      useAuthStore.getState().setMemberName(response.data.memberName);
      useAuthStore.getState().setMemberComment(response.data.memberComment);
      useAuthStore.getState().setMemberImage(response.data.memberImage);
      useAuthStore.getState().setCharacterImage(response.data.characterImage);
      useAuthStore.getState().setAchievement(response.data.achievement);
    }
    return true;
  } catch (error) {
    console.error('Failed to get main:', error);
    return false;
  }
};

export { getMain };
