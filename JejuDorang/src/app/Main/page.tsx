import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMain } from '@apis/main';
import { useAuthStore } from '@states/useAuthStore';
import Profile from '@components/Profile/index';
import MainModal from '@components/MainModal';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // fetchMainData();
  }, []);

  const fetchMainData = async () => {
    const data = await getMain();
    if (data === false) {
      alert('데이터를 불러오는데 실패했습니다.');
      navigate('/');
    }
  };

  return (
    <>
      <Profile
        name={useAuthStore.getState().memberName}
        image={useAuthStore.getState().memberImage}
        detail={useAuthStore.getState().memberComment}
      />
      <hr />
      <MainModal />
    </>
  );
};

export default Main;
