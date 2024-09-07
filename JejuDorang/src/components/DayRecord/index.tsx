import { useEffect, useState } from 'react';
import CustomCalendar from '@components/CustomCalendar';
import Story from '@components/Story';
import WriteDiary from '@components/WriteDiary';
import { StoryItem } from '@type/storyItem';
import { getDiary } from '@apis/getDiary';

const DayRecord = () => {
  const [storyList, setStoryList] = useState<StoryItem[]>([]);
  const [isWriteDiary, setIsWriteDiary] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiary();
      if (data) {
        setStoryList(data);
      } else {
        console.error('Failed to fetch diary data');
      }
    };
    // fetchData();
  }, []);

  const renderStory = () => {
    return storyList.map((story) => (
      <Story
        key={story.diaryId}
        imgSrc={story.image}
        userName={story.name}
        diaryId={story.diaryId}
        viewStatus={story.viewStatus}
      />
    ));
  };

  const handleViewAllDiary = () => {
    console.log('전체보기');
  };

  const writeTodayDiary = () => {
    setIsWriteDiary(true);
  };

  return (
    <div>
      <div className="flex flex-row gap-[12px] mb-[51px] ml-[45px]">
        {renderStory()}
      </div>
      <h1 className="text-[14px] mb-[8px] ml-[45px] font-semibold">내 일기</h1>
      <div className="flex w-[280px] mb-[17px] ml-[45px] justify-between">
        <span className="text-[11px] font-semibold text-gray-lg">
          한달 동안의 추억을 기록해보세요
        </span>
        <button
          className="text-[10px] font-semibold"
          onClick={handleViewAllDiary}
        >
          전체 보기
        </button>
      </div>
      <CustomCalendar />
      <div className="flex justify-center mt-[40px] right-[20px] mb-[30px]">
        <button
          className="bg-primary-orange rounded-[3px] px-[56px] py-[14px] font-semibold text-[10px]"
          onClick={writeTodayDiary}
        >
          오늘 일기 쓰기
        </button>
        {isWriteDiary && <WriteDiary setIsWriteDiary={setIsWriteDiary} />}
      </div>
    </div>
  );
};

export default DayRecord;
