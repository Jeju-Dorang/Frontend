import dorangProfile from '#img/dorangProfile.webp';
import info from '#img/info.svg';
import refresh from '#img/refresh.webp';
import { getDorangActivity } from '@apis/dorangActivity';
import AchievementBox from '@components/AchievementBox';
import { useAuthStore } from '@states/useAuthStore';
import { FullAchievementData } from '@type/achievement';
import { useEffect, useState } from 'react';


const DorangAcitivity= () => {
    const [activementData, setActivementData] = useState<FullAchievementData[]>([]);
    const [isModalClosed, setIsModalClosed] = useState(false);

    // api 연결할 때 바꿀 예정
    const userName: string | null = useAuthStore.getState().memberName;

    useEffect(() => {
        fetchDorangActivityData();
        }, [isModalClosed]);

    const fetchDorangActivityData = async () => {
        const LocationAcitivityData = await getDorangActivity();
        if (LocationAcitivityData) {
            setActivementData(LocationAcitivityData);
        }
    };

    const triggerRerender = () => {
        setIsModalClosed(!isModalClosed);
    };

    return(
        <>
            <div className="flex ml-6 items-start gap-[8px] flex-col">
                <h1 className = "font-semibold text-[20px] text-black">
                    도랑이의 추천
                </h1>
                <h3 className = "font-semibold text-[13px] text-gray-dg">
                    도랑이의 추천듣고 뱃지 받자
                </h3>

                <div className="mt-[21px] w-full h-[118px] items-center justify-center flex flex-row gap-2 bg-[#F3F3F3] rounded-[15px]">
                    <img src={dorangProfile} alt="도랑이 프로필" className = "w-[95px] h-[95px]" />
                    <div className='flex flex-col ml-2'>
                        <p className='flex text-[12px] font-bold'>
                            <span className="text-primary-blue">{userName}</span> 님은 현재 여러 업적을 달성했어요!
                        </p>
                        <p className='flex top-[68px] left-[118px] text-[11px] font-semibold'>
                            앞으로 이런 업적들도 도전해보는게 어떨까요?
                        </p>
                    </div>
                </div>
                
                <div className='flex flex-row w-full justify-between items-center mr-2'>
                    <div className='flex flex-row'>
                        <img 
                            src={info} 
                            alt="info" 
                            className='items-start w-[20px] h-[20px]' />
                        <p className='ml-1 mt-1 text-[8px] font-medium text-gray-dg'>
                            스토리를 작성하여 업적을 인증해주세요!
                        </p>
                        </div>
                    <button onClick={fetchDorangActivityData}>
                        <img src={refresh} alt="refresh" className='w-[20px] h-[29px]' />
                    </button>
                </div>

                <div className='flex flex-col w-full gap-[5px] mt-3 flex-grow'>
                    {activementData.map((data, index) => (
                        <AchievementBox
                            key={index}
                            achievementData = {data}
                            onModalClose={() => triggerRerender}
                        />
                    ))}
                </div>
        </div>

        </>
    );
}

export default DorangAcitivity;