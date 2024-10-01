export interface Tag {
  tagName: string;
}

export interface Diary {
  title: string;
  content: string;
  image?: string;
  achievementid?: number;
  date?: string;
  secret: string;
  tagList: Tag[];
}

export interface DiaryId {
  diaryId : number;
}