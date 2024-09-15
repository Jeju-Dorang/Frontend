interface Tag {
  tagName: string;
}

export interface Diary {
  title: string;
  content: string;
  imageUrl: string;
  secret: string;
  tagList: Tag[];
}
