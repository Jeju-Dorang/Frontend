import { useState, useEffect } from 'react';
// import { Post } from '@type/Post';

const CommunityList = () => {
  //   const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    const data = [
      {
        postId: 1,
        title: '제주도 가성비 게스트 하우스 추천해주세요',
        content: '다음달 제주도 한달살이를 가는데~~~~~~',
      },
      {
        postId: 1,
        title: '제주도 가성비 게스트 하우스 추천해주세요',
        content: '다음달 제주도 한달살이를 가는데~~~~~~',
      },
      {
        postId: 1,
        title: '제주도 가성비 게스트 하우스 추천해주세요',
        content: '다음달 제주도 한달살이를 가는데~~~~~~',
      },
    ];
  }, []);
  const renderList = () => {};
  return <div></div>;
};

export default CommunityList;
