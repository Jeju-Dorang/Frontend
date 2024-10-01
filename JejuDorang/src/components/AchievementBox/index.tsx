import WriteDiary from '@components/DayRecord/WriteDiary';
import { FullAchievementData } from '@type/achievement';
import React, { useState } from 'react';

const AchievementBox = ({ achivementData }: { achivementData: FullAchievementData }) => {

        const progressPercentage = (achivementData.achievementCnt / achivementData.maxAchieve) * 100;
        const [isClicked, setIsClicked] = useState<boolean>(false);

        return (
            <>
            {isClicked ?
                <WriteDiary
                    achievementId={achivementData.achievementId} 
                /> :
                <div className="flex flex-row w-full h-[84px] rounded-[10px] border border-[#C3C9CD] bg-[#FBFBFB] justify-between gap-3 flex-grow">
                    <div className='flex flex-grow'>
                        <img 
                            src={achivementData.achievementIcon} 
                            alt="업적" 
                            className="flex mt-2 ml-3 w-[65px] h-[65px] rounded-[10px] border-2 border-gray-dg bg-white"
                        />

                        <div className='flex flex-col ml-2 justify-between pt-2 pb-2 flex-grow gap-1'>
                            <p className="flex text-black text-[13px] font-bold">
                                {achivementData.achievementName}
                            </p>
                            <p className="flex h-[40px] font-semibold text-gray-dg text-[11px] overflow-scroll">
                                {achivementData.achievementComment}
                            </p>
                            <div className="relative flex h-[12px] rounded-[5px] border border-gray-lg bg-gray-lg">
                                <div
                                    className="h-full rounded-[5px] bg-primary-orange"
                                    style={{ flexGrow: progressPercentage / 100 }}
                                />
                                <span
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-black"
                                >
                                    {achivementData.achievementCnt}/{achivementData.maxAchieve}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className="flex mt-2 mr-2 justify-center items-center w-[57px] h-[24px] rounded-[10px] border-gray-dg text-[10px] font-semibold text-gray-dg"
                            style={{
                                borderColor: '#C3C9CD',
                                backgroundColor: 'rgba(0, 122, 255, 0.15)', 
                                color: 'var(--Miscellaneous-Floating-Tab---Text-Selected, #007AFF)', 
                            }}>
                            {achivementData.achievementType}
                        </div>
                        <button
                            onClick ={() => setIsClicked(!isClicked)}
                            className="flex mt-2 mr-2 justify-center items-center w-[57px] h-[24px] rounded-[10px] border text-[10px] bg-gray-dg font-semibold"
                                style={{
                                    letterSpacing: '-0.2px'
                                }}>
                            인증하기
                        </button>
                    </div>
            </div>
    }
    </>
    );
};

export default AchievementBox;
