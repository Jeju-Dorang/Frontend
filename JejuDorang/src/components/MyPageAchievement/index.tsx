import AchievementBox from "@components/AchievementBox";
import { FullAchievementData } from "@type/achievement";
import { useEffect } from "react";

interface Props {
    setMainMypage: (mainMypage : boolean) => void;
    achievementData : FullAchievementData[]
}

const MyPageAchievement= ({setMainMypage, achievementData}:Props) => {
    useEffect(() => {}, []);
    return (
        <>
        <div className='flex flex-row justify-between items-center ml-7'>
            <h1 className='mt-5 font-semibold text-black text-[21px]'>
                업적
            </h1>
            {/* 페이지에서 useState로 관리할 부분 */}
            <button
                onClick={() => {setMainMypage(false)}}
                className="mt-5 mr-5 font-bold text-[15px] 
                text-gray-dg cursor-pointer hover:text-primary-orange"
                >
                자세히 보기
            </button>
        </div>
        <div className='flex flex-col gap-2 mt-3 items-center mr-4 ml-4'>
                {/* 4개만 출력 */}
                {achievementData &&
                    achievementData
                        .filter(data => data.achievementStatus === "YET") // "YET"인 데이터 필터링
                        .slice(0, 4)
                        .map((data, index) => (
                            <AchievementBox
                                key={index}
                                achievementId = {data.achievementId}
                                achievementIcon={data.achievementIcon}
                                achievementName={data.achievementName}
                                achievementComment={data.achievementComment}
                                maxAchieve={data.maxAchieve}
                                achievementCnt={data.achievementCnt}
                                achievementType= {data.achievementType}
                            />
                        ))
                }
        </div>
        </>
    );
};

export default MyPageAchievement;