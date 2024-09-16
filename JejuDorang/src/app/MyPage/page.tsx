import { useEffect } from 'react';
import MyPageProfile from '@components/MyPageProfile';
import MyPageDiary from '@components/MyPageDiary';
import MyPageAchievement from '@components/MyPageAchievement';

const MyPage = () => {
    useEffect(() => {}, []);
    return (
        <>
        <MyPageProfile />
        <MyPageDiary />
        <MyPageAchievement />
        </>
    );
};

export default MyPage;