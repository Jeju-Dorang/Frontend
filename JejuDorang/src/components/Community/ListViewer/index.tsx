import { postComment } from '@apis/community';
import { DetailQuestion, comments } from '@type/question';
import { Fragment, useState } from 'react';
import { useAuthStore } from '@states/useAuthStore';
import Comment from '../Comment';
import { MAX_LIST_LENGTH } from '@constants/maxTextLength';

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

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    if (input.length <= MAX_LIST_LENGTH) {
      setNewComment(input);
    }
  };

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
      <div className="flex-grow overflow-y-auto">
        <div className="p-6 mt-4 bg-gray-dg bg-opacity-15">
          <div className="flex flex-col mb-[20px]">
            <h2 className="text-[14px] font-semibold break-words">
              Q. &nbsp;{question.title}
            </h2>
            <span className="text-[14px] text-blue mt-2">
              {question.author}
            </span>
          </div>
          <p className="text-[15px] text-gray-700 whitespace-pre-wrap">
            {question.content}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-[14px] font-semibold mb-1 mx-[30px]">댓글</h3>
          <div className="space-y-2">
            {localComments.map((comment, index) => (
              <Fragment key={index}>
                <Comment comment={comment} />
                <hr />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 py-4 mt-[25px] rounded-md border-gray-lg border-[1px]">
        <div className="bg-white p-2 rounded-md">
          <textarea
            className="w-full p-2 border rounded-md mb-2 resize-none"
            placeholder="댓글을 입력하세요"
            rows={4}
            value={newComment}
            onChange={handleCommentChange}
          ></textarea>
          <div className="flex flex-col">
            <span className="text-[12px] text-gray-500 self-end">
              {newComment.length} / {MAX_LIST_LENGTH}
            </span>
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
      </div>
    </div>
  );
};

export default ListViewer;
