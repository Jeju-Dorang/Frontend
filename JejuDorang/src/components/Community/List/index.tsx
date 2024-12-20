import { Post } from '@type/Post';

interface Props {
  post: Post;
  onClick: () => void;
}

const List = ({ post, onClick }: Props) => {
  return (
    <div
      className="w-full h-[75px] border-[1px] rounded-[10px] px-[15px] py-[15px] overflow-hidden cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <h2 className="mb-[6px] text-[12px] text-darkest-gray font-bold whitespace-nowrap overflow-hidden text-ellipsis">
        Q. {post.title}
      </h2>
      <p className="text-[10px] font-semibold text-gray-dg whitespace-nowrap overflow-hidden text-ellipsis">
        {post.content}
      </p>
    </div>
  );
};

export default List;
