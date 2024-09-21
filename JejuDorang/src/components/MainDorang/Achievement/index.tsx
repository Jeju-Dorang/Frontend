import { useAuthStore } from '@states/useAuthStore';
import { Achievement } from '@type/achievement';
import { useEffect, useState } from 'react';

const CompleteAchievement = () => {
  const [achievementData, setAchievementData] = useState<Achievement[] | null>(
    null,
  );
  useEffect(() => {
    const achievements: Achievement[] | null =
      useAuthStore.getState().achievement;
    setAchievementData(achievements);
  }, []);

  const renderAchievement = () => {
    return achievementData?.map((data, index) => (
      <div key={index} className="flex flex-row">
        <img
          src={data.achievementIcon ?? undefined}
          alt={data.achievementName ?? ''}
        />
      </div>
    ));
  };

  return (
    <div className="h-[112px] w-full">
      <span className="font-semibold text-[14px] mb-[11px]">달성한 업적</span>
      <div className="flex flex-col items-center justifty-start">
        {renderAchievement()}
      </div>
    </div>
  );
};

export default CompleteAchievement;
