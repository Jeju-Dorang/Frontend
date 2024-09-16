import Profile from '@components/Profile';
import locationMark from '#img/myPage/locationMark.webp'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const MyPageProfile = () => {
    useEffect(() => {}, []);
    return (
        <>
        <div className='flex justify-end items-center'>
            <Link
                to="/mypage/edit"
                className="mt-5 mr-5 font-bold text-[15px] 
                text-gray-dg cursor-pointer hover:text-primary-orange"
                >
                프로필 설정
            </Link>
        </div>
        <Profile name="손성호" email="shson1217@naver.com" detail="🍊제주살이 D-14" />
        <div className = "flex flex-col items-start justify-start ml-7 mb-5">
            <h1 className='mt-5 font-semibold text-black text-[21px]'>
                플레이스
            </h1>
            <div className = "flex flex-row items-center justify-between gap-36">
                <h2 className='mt-1 font-semibold text-[#7E7E7E] text-[16px]'>
                    카세로지 게스트하우스
                </h2>
                <div className='flex flex-row gap-1 items-center'>
                    <img src = {locationMark} alt ="숙소 위치마크" className='w-[15px] h-[15px]'/>
                    <p className='font-semibold text-[15px] text-[#73BCE5]'>내 위치</p>
                </div>
            </div>
        </div>
        <hr />
        </>
    );
};

export default MyPageProfile;