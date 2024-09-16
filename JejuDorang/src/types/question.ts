export interface comments {
  commentId: number;
  commenter: string;
  commenterImage: string;
  commentContent: string;
  likeCount: number;
  alreadyLike: boolean;
}

export interface Question {
  postId: number;
  title: string;
  content: string;
}

export interface DetailQuestion extends Question {
  author: string;
  comments: comments[];
}
