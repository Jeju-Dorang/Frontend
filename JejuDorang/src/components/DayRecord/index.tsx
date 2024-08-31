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

  return (
    <div>
      <div className="flex flex-row gap-[12px] mb-[51px]">{renderStory()}</div>
      <h1 className="text-[14px] mb-[8px] font-semibold">내 일기</h1>
      <div className="flex w-[280px] mb-[17px] justify-between">
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
    </div>
  );
};

export default DayRecord;
