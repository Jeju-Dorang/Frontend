import { Post } from '@type/Post';
import { api } from './index';
import { Question, DetailQuestion } from '@type/question';

const getPost = async (keyword: string): Promise<Post[] | null> => {
  try {
    const response = await api.get<Post[]>(
      true,
      `/posts/search/questions?keyword=${keyword}`,
    );
    return response.data;
  } catch (error) {
    console.error('Kakao login failed:', error);
    return null;
  }
};

const getQuestions = async (): Promise<Question[] | null> => {
  try {
    const response = await api.get<Question[]>(true, `/posts/questions`);
    return response.data;
  } catch (error) {
    console.error('Failed to post question:', error);
    return null;
  }
};

const getQuestion = async (postId: number): Promise<DetailQuestion | null> => {
  try {
    const response = await api.get<DetailQuestion>(
      true,
      `/posts/question/${postId}`,
    );
    return response.data;
  } catch (error) {
    console.error('Failed to get question:', error);
    return null;
  }
};

const postCommentLike = async (commentId: number): Promise<boolean> => {
  try {
    await api.post<boolean, null>(
      true,
      `/posts/like/comment/${commentId}`,
      null,
    );
    return true;
  } catch (error) {
    console.error('Failed to like comment:', error);
    return false;
  }
};

const postQuestion = async (
  title: string,
  content: string,
): Promise<boolean> => {
  try {
    await api.post<void, { title: string; content: string }>(
      true,
      `/posts/question`,
      { title, content },
    );
    return true;
  } catch (error) {
    console.error('Failed to post question:', error);
    return false;
  }
};

const postComment = async (
  postId: number,
  content: string,
): Promise<boolean> => {
  try {
    await api.post<void, string>(true, `/posts/comment/${postId}`, content);
    return true;
  } catch (error) {
    console.error('Failed to post question:', error);
    return false;
  }
};

export {
  getPost,
  getQuestions,
  getQuestion,
  postQuestion,
  postComment,
  postCommentLike,
};
