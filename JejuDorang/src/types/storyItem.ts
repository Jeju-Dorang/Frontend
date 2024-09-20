import { Tag } from './diary';

export interface StoryItem {
  diaryId: number;
  name: string;
  image: string;
  viewStatus: boolean;
}

export interface DetailStory extends StoryItem {
  date: string;
  content: string;
  alreadyLike: boolean;
  tagList: Tag[];
}
