import Profile from '@components/Profile/index';
import MainModal from '@components/MainModal';
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Profile name="손성호" email="shson1217@naver.com" dDay={27} />
      <hr />
      <MainModal />
    </>
  );
};

export default Main;
