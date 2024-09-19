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
  const [newComment, setNewComment] = useState<string>('');
  const [localComments, setLocalComments] = useState<comments[]>(
    question.comments,
  );

  const handleCommentSubmit = async () => {
    if (newComment.trim() === '') {
      alert('댓글을 입력해주세요.');
      return;
    }
    const res = await postComment(question.postId, newComment);
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
    <div className="flex flex-col h-full">
      <div className="w-full px-4 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-[24px] font-bold">속닥속닥 질문</h1>
          <button
            onClick={onClose}
            className="w-[88px] h-[20px] rounded-[3px] bg-primary-orange font-semibold text-[10px]"
          >
            목록으로
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto px-4">
        <div className="bg-gray-lg p-6 shadow-md mt-4">
          <div className="flex flex-col mb-[20px]">
            <h2 className="text-[15px] font-semibold break-words">
              Q. &nbsp;{question.title}
            </h2>
            <span className="text-sm text-gray-600 mt-2">
              {question.author}
            </span>
          </div>
          <p className="text-gray-700 whitespace-pre-wrap">
            {question.content}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">댓글</h3>
          <div className="space-y-4">
            {localComments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-4 mt-[5px] border-t border-gray-200">
        <textarea
          className="w-full p-2 border rounded-md mb-2"
          placeholder="댓글을 입력하세요"
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-primary-orange rounded-md font-semibold hover:text-white"
            onClick={handleCommentSubmit}
          >
            댓글 작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListViewer;
