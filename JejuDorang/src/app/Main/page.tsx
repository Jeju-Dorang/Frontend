import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMain } from '@apis/main';
import { useAuthStore } from '@states/useAuthStore';
import Profile from '@components/Profile/index';
import MainModal from '@components/MainModal';

const Main = () => {
  const navigate = useNavigate();
  const { memberName, memberImage, memberComment, setMainData } =
    useAuthStore();
  const dataFetchedRef = useRef(false);

  const fetchMainData = useCallback(async () => {
    if (dataFetchedRef.current) {
      return;
    }

    const data = await getMain();
    if (data) {
      const hasChanges =
        data.memberName !== memberName ||
        data.memberImage !== memberImage ||
        data.memberComment !== memberComment;

      if (hasChanges) {
        setMainData(data);
      }
    } else {
      navigate('/login');
    }

    dataFetchedRef.current = true;
  }, [navigate, setMainData, memberName, memberImage, memberComment]);

  useEffect(() => {
    fetchMainData();
    return () => {
      dataFetchedRef.current = false;
    };
  }, [fetchMainData]);

  return (
    <>
      <Profile name={memberName} image={memberImage} detail={memberComment} />
      <hr />
      <MainModal />
    </>
  );
};

export default Main;
