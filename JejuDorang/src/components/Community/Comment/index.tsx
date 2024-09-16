import { useState } from 'react';
import { Heart } from 'lucide-react';
import { comments } from '@type/question';
import { postCommentLike } from '@apis/community';

interface Props {
  comment: comments;
}

const Comment = ({ comment }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(comment.alreadyLike);

  const toggleLike = async () => {
    setIsLiked(!isLiked);
    const res = await postCommentLike(comment.commentId);
    if (!res) alert('좋아요 실패');
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md">
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
            좋아요 {comment.likeCount}
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
