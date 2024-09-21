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

    useEffect(() => {
        fetchMypageData();
    }, []);

    const fetchMypageData = async () => {
        const mypageData = await getMypageData();
        if (mypageData) {
            const profileData : mypageProfile = {
                memberName: mypageData.memberName,
                email: mypageData.email,
                memberComment: mypageData.memberComment,
                profileImage: mypageData.profileImage,
                lodgingAddress: mypageData.lodgingAddress,
            }
            setProfile(profileData)
            setAchievement(mypageData.achievements)
        }
    };

    console.log("profile data: ", profile);
    console.log("achievement data:", achievement);
    
    return (
        <>
        {mainMypage && profile ? 
            <>
                <MyPageProfile
                    memberName={profile.memberName}
                    email={profile.email}
                    memberComment={profile.memberComment}
                    lodgingAddress={profile.lodgingAddress}
                />
                <MyPageDiary />
                <MyPageAchievement 
                    setMainMypage = {setMainMypage}
                    achievementData = {achievement} />
            </>
            :<AchievementList 
                setMainMypage = {setMainMypage}
                achievementData = {achievement} />
        }
        </>
    );
};

export default MyPage;