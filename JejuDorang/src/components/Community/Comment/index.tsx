import { useState } from 'react';
import { Heart } from 'lucide-react';
import { comments } from '@type/question';
import { postCommentLike } from '@apis/community';

interface Props {
  comment: comments;
}

const Comment = ({ comment }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(comment.alreadyLike);
  const [likeCount, setLikeCount] = useState<number>(comment.likeCount);

  const toggleLike = async () => {
    try {
      const res = await postCommentLike(comment.commentId);
      if (res) {
        setIsLiked(!isLiked);
        setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
      } else {
        alert('좋아요 처리에 실패했습니다.');
      }
    } catch (error) {
      console.error('좋아요 처리 중 오류 발생:', error);
      alert('좋아요 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="bg-gray-lg p-4 rounded-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <img
            src={comment.commenterImage}
            alt={comment.commenter}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-[14px] font-semibold">{comment.commenter}</span>
        </div>
        <div className="flex justify-center items-center gap-[5px]">
          <span className="text-[14px] text-gray-dg flex items-center">
            좋아요 {likeCount}
          </span>
          <button onClick={toggleLike} className="flex items-center">
            <Heart
              size={20}
              className={`transition-all duration-300 ease-in-out ${
                isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'
              }`}
            />
          </button>
        </div>
      </div>
      <p className="text-[16px] whitespace-pre-wrap break-words">
        {comment.commentContent}
      </p>
    </div>
  );
};

export default Comment;
