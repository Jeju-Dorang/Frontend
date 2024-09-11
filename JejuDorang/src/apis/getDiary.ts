import { api } from './index';
import { StoryItem } from '@type/storyItem';

export const getDiary = async (): Promise<StoryItem[] | null> => {
  try {
    const res = await api.get<StoryItem[]>(false, '/posts/diaries');
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching diary:', error);
    return null;
  }
};
