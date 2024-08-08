import React from 'react';

interface AchievementBoxProps {
    achievement: string;
    content: string;
    title: string;
}

const AchievementBox: React.FC<AchievementBoxProps> = ({ achievement, content, title }) => {
    return (
        <div className="relative w-[357px] h-[84px] rounded-[10px] border border-[#C3C9CD] bg-[#FBFBFB]">
            <img 
            src="image-url.jpg" 
            alt="업적" 
            className="absolute top-[9px] left-[10px] w-[65px] h-[65px] rounded-[10px] border-2 bg-white"
            style={{ borderColor: 'var(--gray_color, #BDBDBD)' }}
            />
            <p className="absolute top-[10px] left-[82px] text-black text-[15px] font-bold leading-[140%] tracking-[-0.3px]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {achievement}
            </p>
            <div className="absolute top-[30px] left-[82px] w-[145px] h-[40px]">
                <p className="text-gray-dg text-[10px] font-semibold leading-[120%] tracking-[-0.2px] text-left"
                    style={{ 
                        fontFamily: 'Pretendard, sans-serif',
                        margin: 0, // Remove default margins
                        paddingRight: '4px', // Additional padding for indent
                        whiteSpace: 'normal', // Allow text to wrap to next line
                        overflow: 'hidden', // Hide overflowed text
                        textOverflow: 'ellipsis', // Add ellipsis if text overflows
                        wordBreak: 'break-word', // Break long words
                    }}
                >
                    {content}
                </p>
            </div>
            <div className="absolute top-[16px] right-[9px] flex justify-center items-center w-[57px] h-[24px] rounded-[10px] border"
            style={{
                padding: '7px 16px',
                gap: '10px',
                borderColor: '#C3C9CD',
                backgroundColor: 'rgba(0, 122, 255, 0.15)', // Background color with rgba value
                color: 'var(--Miscellaneous-Floating-Tab---Text-Selected, #007AFF)', // Text color
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '140%',
                letterSpacing: '-0.2px'
            }}>
                {title}
            </div>
            <button
            // onClick="location.href='/';"
            className="absolute top-[45px] right-[9px] flex justify-center items-center w-[57px] h-[24px] rounded-[10px] border text-[10px]"
            style={{
                color: 'var(--gray_color, #BDBDBD)',
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '140%',
                letterSpacing: '-0.2px'
                
            }}>
                인증하기
            </button>
            <div className="absolute top-[60px] right-[88px] w-[187px] h-[12px] rounded-[5px] border border-gray-lg bg-gray-dg">
            </div>
        </div>
    );
}

export default AchievementBox;