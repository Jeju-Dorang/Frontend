import { useAuthStore } from '@states/useAuthStore';
import { Achievement } from '@type/achievement';
import { useEffect, useState } from 'react';

const CompleteAchievement = () => {
  const [achievementData, setAchievementData] = useState<Achievement[] | null>(
    null,
  );
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    const achievements: Achievement[] | null =
      useAuthStore.getState().achievement;
    setAchievementData(achievements);
  }, []);

  const handleClick = (index: number) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderAchievement = () => {
    return achievementData?.map((data, index) => (
      <div
        key={index}
        className="flex justify-center items-center p-1 relative group"
        onClick={() => handleClick(index)}
        onMouseLeave={() => setClickedIndex(null)}
      >
        <img
          className="w-full h-full max-w-[49px] max-h-[55px] hover:opacity-70 cursor-pointer"
          src={data.achievementIcon ?? undefined}
          alt={data.achievementName ?? ''}
        />
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded transition-opacity duration-200 whitespace-nowrap ${
            index === clickedIndex
              ? 'opacity-100'
              : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          {data.achievementName}
        </div>
      </div>
    ));
  };

  return (
    <div className="h-fit w-full">
      <span className="font-semibold text-[14px] mb-[11px]">달성한 업적</span>
      <div className="flex flex-wrap items-center justify-start gap-[5px] min-h-[55px]">
        {renderAchievement()}
      </div>
    </div>
  );
};

export default CompleteAchievement;
