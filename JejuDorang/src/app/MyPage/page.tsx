import { useEffect } from 'react';
import EditProfile from '@components/EditProfile';

const MyPage = () => {
    useEffect(() => {}, []);
    return (
        <>
        
        <EditProfile userName="손성호" userEmail="shson1217@naver.com" userDetail="제주살이 일주일지남" />
        <hr />
        </>
    );
};

export default MyPage;