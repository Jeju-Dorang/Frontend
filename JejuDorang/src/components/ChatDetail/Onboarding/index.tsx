import DorangProfile from '#img/dorangProfile.webp'
import { useEffect, useState } from 'react';
import InterestBox from './InterestBox';
import { INTERESTS } from '@constants/interests';

interface Props {
    openOnboarding: (savedInterests:string[]) => void;
}


const Onboarding = ({openOnboarding}:Props) => {
    const [interest, setInterest] = useState<string[]>([]);
    const [isClicked, setIsClicked] = useState<boolean>(false);

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

    useEffect(() => {
        if (isClicked) {
            openOnboarding(interest)
        }
    }, [isClicked]);


    // interest 디버깅
    console.log(interest)

    return (
        <div className="flex w-full h-[217px] mt-[15px] flex-col ">
            <div className="flex flex-row mt-[23px]">
                <img src = {DorangProfile} alt = "도랑이 프로필"
                    className='flex ml-[27px] w-[60px] h-[60px]' />
                <div className="flex w-[242px] h-[73px] ml-[9px] px-[12px] py-[8px]
                                border border-gray-dg rounded-[17px] bg-white">
                    <p className="font-medium text-[13px] text-black">
                        안녕하세요 챗봇 도랑입니다 <br />
                        채팅을 시작하기 전 관심 여행 키워드를<br />
                        선택해주세요.
                    </p>
                </div>
            </div>

            <div className="flex w-[242px] ml-[92px] px-[12px] py-[8px] mt-1
                            border border-gray-dg rounded-[17px] bg-white">
                <div className="flex flex-wrap gap-[5px]">
                    {INTERESTS.map((data, index) => (
                        <InterestBox
                            key={index}
                            interest={data}
                            onInterestChange={handleInterestChange}
                        />
                    ))}
                </div>
            </div>

            <button onClick = {() =>setIsClicked(!isClicked)}
                    className='flex mt-[15px] ml-[273px] w-[65px] h-[25px] justify-center items-center rounded-[10px]
                                bg-primary-orange text-black disabled:bg-white disabled:text-gray-dg'
                    disabled={interest.length === 0}>
                <p className='font-semibold text-[13px]'>선택완료</p>
            </button>

        </div>

    );

}

export default Onboarding;