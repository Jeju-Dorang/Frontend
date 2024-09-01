import { useEffect, useState } from 'react';
import Story from '@components/Story';
import { StoryItem } from '@type/storyItem';
import CustomCalendar from '@components/CustomCalendar';

const DayRecord = () => {
  const [storyList, setStoryList] = useState<StoryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: StoryItem[] = [
        //삭제예정
        {
          diaryId: 4,
          name: '서지',
          image: 'url',
          viewStatus: false,
        },
        {
          diaryId: 5,
          name: '성호',
          image: 'url',
          viewStatus: true,
        },
      ];
      setStoryList(data);
    };

    fetchData();
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
    console.log('오늘 일기 쓰기');
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
      </div>
    </div>
  );
};

export default DayRecord;
