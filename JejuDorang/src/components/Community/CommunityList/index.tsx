import { useState, useEffect } from 'react';
import { Post } from '@type/Post';
import List from '../List';

const CommunityList = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    const data = [
      {
        postId: 1,
        title:
          '제주도 가성비 게스트 하우스 추천해주세요dddahdbasjdhbasdjhbasasjdhbasjdbasjhdbasjdhbasdasjdhbasjdhbs',
        content:
          '다음달 제주도 한달살이를 가는데~~~~~~aksdmlasdlasdnmalsdjndjsdankaksjdnaksdjnaskjdnaksjdnaksjndkasjsaksdjnaskdjnaskdj',
      },
      {
        postId: 2,
        title: '제주도 가성비 게스트 하우스 추천해주세요',
        content: '다음달 제주도 한달살이를 가는데~~~~~~',
      },
      {
        postId: 3,
        title: '제주도 가성비 게스트 하우스 추천해주세요',
        content: '다음달 제주도 한달살이를 가는데~~~~~~',
      },
    ];
    setPostList(data);
  }, []);
  const renderList = () => {
    return postList.map((post) => <List key={post.postId} post={post} />);
  };
  return (
    <div className="flex flex-col items-center gap-[4px]">{renderList()}</div>
  );
};

export default CommunityList;
