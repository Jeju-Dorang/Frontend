import { useState } from 'react';
import Community from '@components/Community';
import Diary from '@components/Diary';

const Record = () => {
  const [category, setcategory] = useState<string>('record');

  const handleTabClick = (tab: string) => {
    setcategory(tab);
  };

  return (
    <div className="ml-[45px] mt-[38px]">
      <div className="flex gap-[22px] mb-[53px]">
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
          }`}
          onClick={() => handleTabClick('community')}
        >
          속닥속닥
        </span>
      </div>
      {category === 'community' ? <Community /> : <Diary />}
    </div>
  );
};

export default Record;
