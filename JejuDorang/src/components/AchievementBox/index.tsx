import WriteDiary from '@components/DayRecord/WriteDiary';
import { FullAchievementData } from '@type/achievement';
import React, { useState } from 'react';

interface Props {
  achievementData: FullAchievementData;
  onModalClose?: () => void; // 모달이 닫힐 때 호출할 함수
}

const AchievementBox = ({achievementData,onModalClose}: Props) => {
  const progressPercentage =
    achievementData.achievementCnt >= achievementData.maxAchieve
      ? 100
      : (achievementData.achievementCnt / achievementData.maxAchieve) * 100;

  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  const handleClose = () => {
    setIsClicked(false);
    if (onModalClose) {
      onModalClose();
    }
  };

  return (
    <>
      {isClicked ? (
        <WriteDiary
          achievementId={achievementData.achievementId}
          onClose={handleClose}
        />
      ) : (
        <div className="flex flex-row w-full h-[84px] rounded-[10px] border border-[#C3C9CD] bg-[#FBFBFB] justify-between gap-3">
          <div className="flex flex-grow">
            <img
              src={achievementData.achievementIcon}
              alt="업적"
              className="flex mt-2 ml-3 w-[65px] h-[65px] rounded-[10px] border-2 border-gray-dg bg-white"
            />

            <div className="flex flex-col ml-2 justify-between pt-2 pb-2 flex-grow gap-1">
              <p className="flex text-black text-[13px] font-bold">
                {achievementData.achievementName}
              </p>
              <p className="flex h-[40px] font-semibold text-gray-dg text-[11px] overflow-scroll">
                {achievementData.achievementComment}
              </p>
              <div className="relative flex h-[12px] rounded-[5px] border border-gray-lg bg-gray-lg">
                <div
                  className="h-full rounded-[5px] bg-primary-orange"
                  style={{ flexGrow: progressPercentage / 100 }}
                />
                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-black">
                  {achievementData.achievementCnt}/{achievementData.maxAchieve}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div
              className="flex mt-2 mr-2 justify-center items-center w-[57px] h-[24px] rounded-[10px] border-gray-dg text-[10px] font-semibold text-gray-dg"
              style={{
                borderColor: '#C3C9CD',
                backgroundColor: 'rgba(0, 122, 255, 0.15)',
                color:
                  'var(--Miscellaneous-Floating-Tab---Text-Selected, #007AFF)',
              }}
            >
              {achievementData.achievementType}
            </div>
            <button
              onClick={() => setIsClicked(!isClicked)}
              className="flex mt-2 mr-2 justify-center items-center w-[57px] h-[24px] rounded-[10px] border text-[10px] bg-gray-dg font-semibold"
              style={{
                letterSpacing: '-0.2px',
              }}
            >
              인증하기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementBox;
