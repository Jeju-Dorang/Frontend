import AchievementBox from "@components/AchievementBox";
import { AchievementData } from "@type/achievement";
import { useEffect } from "react";

// api 연결할 때 바꿀 예정
const achievementData: AchievementData[] = [
    { achievement: '흑돼지1', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지2', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지3', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지4', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지5', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" }
];
//

interface Props {
    setMainMypage: (mainMypage : boolean) => void;
}

const MyPageAchievement= ({setMainMypage}:Props) => {
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
        <div className='flex flex-col gap-2 mt-3 items-center'>
                {/* 4개만 출력 */}
                {achievementData.slice(0, 4).map((data, index) => (
                    <AchievementBox
                        key={index}
                        achievement={data.achievement}
                        content={data.content}
                        title={data.title}
                    />
                ))}
        </div>
        </>
    );
};

export default MyPageAchievement;