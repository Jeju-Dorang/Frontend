import Profile from '@components/Profile/index';
import MainModal from '@components/MainModal';
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    // store에서 jwt가 없으면 로그인 페이지로 이동
    // store에서 isLogin이 false면 get요청으로 유저정보가져와서 store에 저장
    console.log('Main page');
  }, []);
  return (
    <>
      <Profile name="손성호" email="shson1217@naver.com" dDay={27} />
      <hr />
      <MainModal />
    </>
  );
};

export default Main;
