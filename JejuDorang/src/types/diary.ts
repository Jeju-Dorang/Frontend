export interface Tag {
  tagName: string;
}

export interface Diary {
  title: string;
  content: string;
  imageUrl?: string;
  achievementid?: number;
  date?: string;
  secret: string;
  tagList: Tag[];
}
