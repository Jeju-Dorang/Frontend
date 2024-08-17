import DorangProfile from '#img/dorangProfile.webp'
import { useState } from 'react';
import InterestBox from './InterestBox';

const Interest = () => {
    const interests = ['휴식', '맛집투어', '관광지', '액티비티', '등산', '카페'];
    const [interest, setInterest] = useState<string[]>([]);

    const handleInterestChange = (selectedInterest: string, clicked: boolean) => {
        setInterest(prevState => {
            if (clicked) {
                // 클릭된 경우: selectedInterest를 배열의 맨 앞에 추가
                return prevState.includes(selectedInterest)
                    ? prevState
                    : [selectedInterest, ...prevState];
            } else {
                // 클릭되지 않은 경우: selectedInterest를 배열에서 제거
                return prevState.filter(interest => interest !== selectedInterest);
            }
        });
    };

    // interest 디버깅
    console.log(interest)

    return (
        <div className="flex w-full h-[217px] mt-[15px] flex-col bg-gray-lg">
            <div className="flex flex-row mt-[23px]">
                <img src = {DorangProfile} alt = "도랑이 프로필"
                    className='flex ml-[27px] w-[56px] h-[56px]' />
                <div className="flex w-[242px] h-[47px] ml-[9px] px-[12px] py-[8px]
                                border border-gray-dg rounded-[17px] bg-white">
                    <p className="font-semibold text-[10px] text-black">
                        안녕하세요 챗봇 도랑입니다 <br />
                        채팅을 시작하기 전 관심 여행 키워드를 선택해주세요
                    </p>
                </div>
            </div>

            <div className="flex w-[242px] ml-[92px] px-[12px] py-[8px]
                            border border-gray-dg rounded-[17px] bg-white">
                <div className="flex flex-wrap gap-[5px]">
                    {interests.map((data, index) => (
                        <InterestBox
                            key={index}
                            interest={data}
                            onInterestChange={handleInterestChange}
                        />
                    ))}
                </div>
            </div>
        </div>

    );

}

export default Interest;