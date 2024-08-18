import React from 'react';

interface AchievementBoxProps {
    achievement: string;
    content: string;
    title: string;
    // img // 이미지 데이터도 받아와야함
}

const AchievementBox: React.FC<AchievementBoxProps> = ({ achievement, content, title}) => {
    return (
        <div className="relative w-[342px] h-[84px] left-[15px] rounded-[10px] border border-[#C3C9CD] bg-[#FBFBFB]">
            <img src="image-url.jpg" alt="업적" className="absolute top-[9px] left-[10px] w-[65px] h-[65px] rounded-[10px] border-2 bg-white" style={{ borderColor: 'var(--gray_color, #BDBDBD)' }}/>
            <p className="absolute top-[10px] left-[82px] text-black text-[15px] font-bold leading-[140%] tracking-[-0.3px]">
                {achievement}
            </p>
            <div className="absolute top-[30px] left-[82px] w-[145px] h-[40px]">
                <p className="text-gray-dg text-[10px] font-semibold leading-[120%] tracking-[-0.2px] text-left">
                    {content}
                </p>
            </div>
            <div className="absolute top-[16px] right-[9px] flex justify-center items-center w-[57px] h-[24px] rounded-[10px] border-gray-dg text-[10px] font-semibold text-gray-dg"
                style={{
                    borderColor: '#C3C9CD',
                    backgroundColor: 'rgba(0, 122, 255, 0.15)', 
                    color: 'var(--Miscellaneous-Floating-Tab---Text-Selected, #007AFF)', 
                }}>
                {title}
            </div>
            <button
            className="absolute top-[45px] right-[9px] flex justify-center items-center w-[57px] h-[24px] rounded-[10px] border text-[10px] bg-gray-dg font-semibold"
                style={{
                    letterSpacing: '-0.2px'
                }}>
                인증하기
            </button>
            <div className="absolute top-[60px] right-[73px] w-[187px] h-[12px] rounded-[5px] border border-gray-lg bg-gray-dg">
            </div>
        </div>
    );
}

export default AchievementBox;