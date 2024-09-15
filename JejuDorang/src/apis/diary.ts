import { api } from './index';
import { StoryItem } from '@type/storyItem';
import { Diary } from '@type/diary';
import { Streak } from '@type/streak';

const getStories = async (): Promise<StoryItem[] | null> => {
  try {
    const res = await api.get<StoryItem[]>(true, '/posts/diaries');
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching diary:', error);
    return null;
  }
};

const getStory = async (diaryId: number): Promise<Diary | null> => {
  try {
    const res = await api.get<Diary>(true, `/posts/diaries/${diaryId}`);
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching diary:', error);
    return null;
  }
};

const getStreaks = async (
  year: number,
  month: number,
): Promise<Streak[] | null> => {
  try {
    const res = await api.get<Streak[]>(
      true,
      `/posts/streaks?year=${year}&month=${month}`,
    );
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching streaks:', error);
    return null;
  }
};

const postDiary = async (diary: Diary) => {
  try {
    await api.post<boolean, Diary>(true, `/posts/diary`, diary);
    return true;
  } catch (error) {
    console.error('Failed to fetch stories:', error);
    return false;
  }
};

export { getStories, getStory, postDiary, getStreaks };
