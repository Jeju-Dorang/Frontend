import { FullAchievementData } from '@type/achievement';
import React from 'react';

const AchievementBox = ({ 
    achievementName,
    achievementComment,
    maxAchieve,
    achievementCnt,
    }: FullAchievementData) => {
    
    const progressPercentage = (achievementCnt / maxAchieve) * 100;

    return (
        <div className="relative w-[342px] h-[84px] rounded-[10px] border border-[#C3C9CD] bg-[#FBFBFB]">
            <img src="image-url.jpg" alt="업적" className="absolute top-[9px] left-[10px] w-[65px] h-[65px] rounded-[10px] border-2 bg-white" style={{ borderColor: 'var(--gray_color, #BDBDBD)' }}/>
            <p className="absolute top-[10px] left-[82px] text-black text-[15px] font-bold leading-[140%] tracking-[-0.3px]">
                {achievementName}
            </p>
            <div className="absolute top-[30px] left-[82px] w-[145px] h-[40px]">
                <p className="text-gray-dg text-[10px] font-semibold leading-[120%] tracking-[-0.2px] text-left">
                    {achievementComment}
                </p>
            </div>
            <div className="absolute top-[16px] right-[9px] flex justify-center items-center w-[57px] h-[24px] rounded-[10px] border-gray-dg text-[10px] font-semibold text-gray-dg"
                style={{
                    borderColor: '#C3C9CD',
                    backgroundColor: 'rgba(0, 122, 255, 0.15)', 
                    color: 'var(--Miscellaneous-Floating-Tab---Text-Selected, #007AFF)', 
                }}>
                운동{/* {title} */}
            </div>
            <button
            className="absolute top-[45px] right-[9px] flex justify-center items-center w-[57px] h-[24px] rounded-[10px] border text-[10px] bg-gray-dg font-semibold"
                style={{
                    letterSpacing: '-0.2px'
                }}>
                인증하기
            </button>
            < div className="absolute top-[60px] right-[73px] w-[187px] h-[12px] rounded-[5px] border border-gray-lg bg-gray-lg">
                <div
                    className="h-full rounded-[5px] bg-primary-orange"
                    style={{ width: `${progressPercentage}%` }}
                />
                <span
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-black"
                >
                    {achievementCnt}/{maxAchieve}
                </span>
            </div>
        </div>
    );
}

export default AchievementBox;