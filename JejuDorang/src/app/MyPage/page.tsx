import { useEffect, useState } from 'react';
import MyPageProfile from '@components/MyPageProfile';
import MyPageDiary from '@components/MyPageDiary';
import MyPageAchievement from '@components/MyPageAchievement';
import AchievementList from '@components/AchievementList';
import { getMypageData } from '@apis/mypage';
import { FullAchievementData } from '@type/achievement';
import { mypageProfile } from '@type/mypage';

const MyPage = () => {
  const [mainMypage, setMainMypage] = useState<boolean>(true);
  const [profile, setProfile] = useState<mypageProfile>();
  const [achievement, setAchievement] = useState<FullAchievementData[]>([]);
  const [isModalClosed, setIsModalClosed] = useState(false);

  useEffect(() => {
    fetchMypageData();
  }, [isModalClosed]);

  const triggerRerender = () => {
    setIsModalClosed(!isModalClosed);
  }


  const fetchMypageData = async () => {
    const mypageData = await getMypageData();
    if (mypageData) {
      const profileData: mypageProfile = {
        memberName: mypageData.memberName,
        memberComment: mypageData.memberComment,
        profileImage: mypageData.profileImage,
        lodgingAddress: mypageData.lodgingAddress,
      };
      setProfile(profileData);
      setAchievement(mypageData.achievements);
    }
  };

  return (
    <>
      {mainMypage && profile ? (
        <>
          <MyPageProfile
            memberName={profile.memberName}
            memberComment={profile.memberComment}
            profileImage={profile.profileImage}
            lodgingAddress={profile.lodgingAddress}
          />
          <MyPageDiary />
          <MyPageAchievement
            setMainMypage={setMainMypage}
            achievementData={achievement}
            setIsModalClosed = {triggerRerender}
          />
        </>
      ) : (
        <AchievementList
          setMainMypage={setMainMypage}
          achievementData={achievement}
          setIsModalClosed = {triggerRerender}
        />
      )}
    </>
  );
};

export default MyPage;
