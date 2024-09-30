import { useState } from 'react';
import Community from '@components/Community';
import DayRecord from '@components/DayRecord';

const Record = () => {
  const [category, setcategory] = useState<string>('record');

  const handleTabClick = (tab: string) => {
    setcategory(tab);
  };

  return (
    <div className="mt-[42px]">
      <div className="flex gap-[22px] mb-[58px] mx-[49px]">
        <span
          className={`cursor-pointer ${
            category === 'record' ? 'text-primary-orange' : 'text-gray-dg'
          }`}
          onClick={() => handleTabClick('record')}
        >
          하루 기록
        </span>
        <span
          className={`cursor-pointer ${
            category === 'community' ? 'text-primary-orange' : 'text-gray-dg'
          } hover:text-primary-orange`}
          onClick={() => handleTabClick('community')}
        >
          속닥속닥
        </span>
      </div>
      {category === 'record' ? <DayRecord /> : <Community />}
    </div>
  );
};

export default Record;
