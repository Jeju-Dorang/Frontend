export interface Tag {
  tagName: string;
}

export interface Diary {
  title: string;
  content: string;
  imageUrl: string;
  achievementId?: number;
  secret: string;
  tagList: Tag[];
}
