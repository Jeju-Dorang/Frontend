import Profile from '@components/Profile';
import locationMark from '#img/myPage/locationMark.webp';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mypageProfile } from '@type/mypage';

const MyPageProfile = ({
  memberName,
  memberComment,
  profileImage,
  lodgingAddress,
}: mypageProfile) => {
  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <>
      <div className="flex justify-end items-center">
        <Link
          to="/mypage/edit"
          className="mt-5 mr-5 font-bold text-[15px]
                text-gray-dg cursor-pointer hover:text-primary-orange"
        >
          프로필 설정
        </Link>
      </div>
      <Profile name={memberName} image={profileImage} detail={memberComment} />
      <div className="flex flex-col items-start justify-start ml-7 mb-5">
        <h1 className="mt-5 font-semibold text-black text-[21px]">플레이스</h1>
        <div className="flex flex-row items-center justify-between gap-32">
          {lodgingAddress ? (
            <h2 className="mt-1 font-semibold text-[#7E7E7E] text-[16px]">
              {lodgingAddress}
            </h2>
          ) : (
            <button
              onClick={() => navigate('edit')}
              className="mt-1 font-semibold text-[#7E7E7E] text-[16px]
                                        hover:text-primary-blue"
            >
              숙소를 등록해주세요
            </button>
          )}
          <div className="flex flex-row gap-1 items-center">
            <img
              src={locationMark}
              alt="숙소 위치마크"
              className="w-[15px] h-[15px]"
            />
            <p className="font-semibold text-[15px] text-[#73BCE5]">내 위치</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MyPageProfile;
