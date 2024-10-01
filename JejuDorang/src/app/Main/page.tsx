import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMain } from '@apis/main';
import { useAuthStore } from '@states/useAuthStore';
import { isEqual } from 'lodash';
import Profile from '@components/Profile/index';
import MainModal from '@components/MainModal';

const Main = () => {
  const navigate = useNavigate();
  const {
    memberName,
    memberImage,
    memberComment,
    achievement,
    lodging,
    characterImage,
    setMainData,
  } = useAuthStore();
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
        data.memberComment !== memberComment ||
        !isEqual(data.achievement, achievement) ||
        !isEqual(data.lodging, lodging) ||
        !isEqual(data.characterImage, characterImage);
      if (hasChanges) {
        setMainData(data);
      }
    } else {
      navigate('/login');
    }

    dataFetchedRef.current = true;
  }, [
    navigate,
    setMainData,
    memberName,
    memberImage,
    memberComment,
    achievement,
    lodging,
    characterImage,
  ]);

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
