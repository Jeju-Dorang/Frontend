import { postComment } from '@apis/community';
import { DetailQuestion, comments } from '@type/question';
import { useState } from 'react';
import { useAuthStore } from '@states/useAuthStore';
import Comment from '../Comment';

interface Props {
  question: DetailQuestion;
  onClose: () => void;
  onCommentAdded: (newComment: comments) => void;
}

const ListViewer = ({ question, onClose, onCommentAdded }: Props) => {
  const [newComment, setNewComment] = useState('');
  const [localComments, setLocalComments] = useState<comments[]>(
    question.comments,
  );

  const handleCommentSubmit = async () => {
    const res = await postComment(question.postId, newComment);
    if (newComment === '') {
      alert('댓글을 입력해주세요.');
      return;
    }
    if (!res) {
      alert('댓글 작성에 실패했습니다.');
      return;
    }

    const addedComment: comments = {
      commenter: useAuthStore.getState().memberName || '익명',
      commenterImage: useAuthStore.getState().memberImage || '',
      commentContent: newComment,
      likeCount: 0,
      alreadyLike: false,
      commentId: 0,
    };

    setLocalComments((prevComments) => [...prevComments, addedComment]);
    onCommentAdded(addedComment);
    setNewComment('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-[24px] font-bold">질문</h1>
        <button
          onClick={onClose}
          className="w-[88px] h-[20px] mt-[10px] rounded-[3px] bg-primary-orange font-semibold text-[10px]"
        >
          목록으로
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-[20px]">
          <h2 className="text-xl font-semibold">{question.title}</h2>
          <span className="text-sm text-gray-600">{question.author}</span>
        </div>
        <p className="text-gray-700">{question.content}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">댓글</h3>
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded-md"
            placeholder="댓글을 입력하세요"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="mt-2 px-4 py-2 bg-primary-orange text-white rounded-md hover:bg-orange-600"
            onClick={handleCommentSubmit}
          >
            댓글 작성
          </button>
        </div>
        <div className="space-y-4">
          {localComments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListViewer;
