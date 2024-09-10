import { api } from './index';
import { StoryItem } from '@type/storyItem';

const getStories = async (): Promise<StoryItem[]> => {
  try {
    const response = await api.get<StoryItem[]>(true, `/posts/diaries`);
    return response.data || [];
  } catch (error) {
    console.error('Failed to fetch stories:', error);
    return [];
  }
};

export { getStories };
