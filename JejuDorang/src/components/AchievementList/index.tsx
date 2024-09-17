import { ACHEIVEMENT_CATEGORY } from "@constants/category";
import Header from "./Header";
import { useState } from "react";
import Info from '#img/info.svg'
import { AchievementData } from "@type/achievement";
import AchievementBox from "@components/AchievementBox";

// api 연결할 때 바꿀 예정
const achievementData: AchievementData[] = [
    { achievement: '흑돼지', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
];

const buttonStyles = (isActive: boolean) =>
    `w-[64px] h-[31px] text-[15px] leading-[140%] rounded-[50px] border whitespace-nowrap ${
        isActive ? 'bg-primary-orange text-white' : 'bg-white text-[#515356]'
    }`;

const AchievementList = () => {
    const [category, setCategory] = useState<string>('전체');
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <>
            <Header />
            <div className="flex flex-row pt-[12px] pl-[16px] gap-[10px] mb-[19px]">
                {ACHEIVEMENT_CATEGORY.map((categoryItem) => (
                <button
                    className={buttonStyles(category === categoryItem.name)}
                    key={categoryItem.id}
                    onClick={() => setCategory(categoryItem.name)}
                >
                    {categoryItem.name}
                </button>
                ))}
            </div>
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold text-[20px] text-black ml-4">
                    미달성 업적
                </h1>
                <img 
                    src={Info} 
                    alt="Info icon" 
                    className="w-[20px] h-[20px] mr-4"
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                />
                <div className={`flex mr-4
                                ${showInfo ? 'opacity-100' : 'opacity-0 '} transition-opacity bg-gray-lg
                                text-primary-blue text-[10px] rounded-lg px-2 py-1 z-10`}>
                        스토리에 태그를 선택하셔서 글을 작성해주세요!
                    </div>
            </div>
            <div className='flex flex-col gap-[5px] items-center justify-center mb-4'>
                {achievementData.map((data, index) => (
                    <AchievementBox
                        key={index}
                        achievement={data.achievement}
                        content={data.content}
                        title={data.title}
                    />
                ))}
            </div>

            <hr />

            <h1 className="font-semibold text-[20px] text-black ml-4 mt-3">
                달성 업적
            </h1>
            <div className='flex flex-col gap-[5px] items-center justify-center mb-4'>
                {achievementData.map((data, index) => (
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
}

export default AchievementList;