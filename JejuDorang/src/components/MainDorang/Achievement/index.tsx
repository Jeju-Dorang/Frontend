import { useEffect, useState } from 'react';

const Achievement = () => {
  const [achievement, setAchievement] = useState([]);
  useEffect(() => {
    // api로 달성한 업적 가져오기
    // const achievement = res.data.achievements;
    // achievement.forEach((data) => {
    // setAchievement(data.achievementIcon);
    // });
  }, []);
  const renderAchievement = () => {
    return achievement.map((data, index) => (
      <div key={index} className="flex flex-col items-center">
        <img src={data} alt="achievement" />
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

export default Achievement;
