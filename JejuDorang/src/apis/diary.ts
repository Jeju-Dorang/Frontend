import { api } from './index';
import { DetailStory, StoryItem } from '@type/storyItem';
import { Diary, DiaryId } from '@type/diary';
import { Streak } from '@type/streak';
import { convertToTwoDigits } from '@utils/index';

const getStories = async (): Promise<StoryItem[] | null> => {
  try {
    const response = await api.get<StoryItem[]>(true, '/posts/diaries');
    return response.data;
  } catch (error) {
    console.error('Error fetching diary:', error);
    return null;
  }
};

const getStory = async (diaryId: number): Promise<DetailStory | null> => {
  try {
    const response = await api.get<DetailStory>(
      true,
      `/posts/diaries/${diaryId}`,
    );
    return response.data;
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
    const paddedMonth = convertToTwoDigits(month);
    const response = await api.get<Streak[]>(
      true,
      `/posts/streaks?year=${year}&month=${paddedMonth}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching streaks:', error);
    return null;
  }
};

const postStoryLike = async (diaryId: number): Promise<boolean> => {
  try {
    await api.post<boolean, null>(true, `/posts/like/diary/${diaryId}`, null);
    return true;
  } catch (error) {
    console.error('Failed to like diary:', error);
    return false;
  }
};

const postDiary = async (diary: Diary): Promise<number|null> => {
  try {
    const response = await api.post<DiaryId, Diary>(
      true,
      `/posts/diary`,
      diary);
      return response.data.diaryId;
  } catch (error) {
    console.error('Failed to post diary:', error);
    return null;
  }
};

const postDiaryImage = async (diaryId: number, diaryImg: File ): Promise<boolean> => {
  const formData = new FormData();
  formData.append('image', diaryImg);

  try {
    await api.imgPost<null, FormData>(
      true,
      `/image/diary?diaryId=${diaryId}`,
      formData
    );
    return true;
  } catch (error) {
    console.error('Failed to post diaryImage :', error);
    return false;
  }
};


export { 
  getStories, 
  getStory, 
  getStreaks, 
  postDiary, 
  postStoryLike,
  postDiaryImage
};
