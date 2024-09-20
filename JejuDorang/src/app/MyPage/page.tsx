import { useEffect, useState } from 'react';
import MyPageProfile from '@components/MyPageProfile';
import MyPageDiary from '@components/MyPageDiary';
import MyPageAchievement from '@components/MyPageAchievement';
import AchievementList from '@components/AchievementList';

const MyPage = () => {
    const [mainMypage, setMainMypage] = useState<boolean>(true)
    useEffect(() => {}, []);
    return (
        <>
        {mainMypage?
            <>
            <MyPageProfile />
            <MyPageDiary />
            <MyPageAchievement setMainMypage = {setMainMypage} />
            </>
            :<AchievementList setMainMypage = {setMainMypage} />
        }
        </>
    );
};

export default MyPage;