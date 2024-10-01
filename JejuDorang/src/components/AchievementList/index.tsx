import { ACHEIVEMENT_CATEGORY } from "@constants/category";
import Header from "./Header";
import { useState } from "react";
import Info from '#img/info.svg'
import {FullAchievementData } from "@type/achievement";
import AchievementBox from "@components/AchievementBox";

interface Props {
    setMainMypage: (mainMypage : boolean) => void;
    achievementData : FullAchievementData[]
}


const buttonStyles = (isActive: boolean) =>
    `w-[64px] h-[31px] text-[15px] leading-[140%] rounded-[50px] border whitespace-nowrap ${
        isActive ? 'bg-primary-orange text-white' : 'bg-white text-[#515356]'
    }`;

const AchievementList = ({setMainMypage, achievementData}:Props) => {
    const [category, setCategory] = useState<string>('전체');
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <>
            <Header setMainMypage={setMainMypage}/>
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
                        업적 인증하기 버튼을 눌러 글을 작성해주세요!
                    </div>
            </div>
            <div className="relative flex w-full h-80 mb-3 overflow-y-scroll">
                <div className='flex flex-col gap-[5px] items-center justify-start w-full mx-4'>
                {achievementData &&
            (
                category !== "전체" 
                ? achievementData
                    .filter(data => data.achievementStatus === "YET" && data.achievementType === category)
                    .map((data, index) => (
                        <AchievementBox
                            key={index}
                            achievementData = {data}
                        />
                    ))
                : achievementData
                    .filter(data => data.achievementStatus === "YET")
                    .map((data, index) => (
                        <AchievementBox
                            key={index}
                            achievementData = {data}
                        />
                    ))
            )
        }
                </div>
            </div>

            <hr />

            <h1 className="flex font-semibold text-[20px] text-black ml-4 mt-3">
                달성 업적
            </h1>
            <div className="relative flex w-full h-80 mb-3 overflow-y-scroll">
                <div className='flex flex-col gap-[5px] items-center justify-start w-full mx-4'>
                {achievementData &&
            (
                category !== "전체" 
                ? achievementData
                    .filter(data => data.achievementStatus === "DONE" && data.achievementType === category)
                    .map((data, index) => (
                        <AchievementBox
                            key={index}
                            achievementData = {data}
                        />
                    ))
                : achievementData
                    .filter(data => data.achievementStatus === "DONE")
                    .map((data, index) => (
                        <AchievementBox
                            key={index}
                            achievementData = {data}
                        />
                    ))
            )
        }
                </div>
            </div>
        </>

    );
}

export default AchievementList;