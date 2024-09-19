import { useEffect, useState, useRef } from 'react';
import CustomCalendar from './CustomCalendar';
import Story from './Story';
import WriteDiary from './WriteDiary';
import StoryViewer from './StoryViewer';
import { StoryItem } from '@type/storyItem';
import { getStories } from '@apis/diary';

const DayRecord = () => {
  const [storyList, setStoryList] = useState<StoryItem[]>([]);
  const [isWriteDiary, setIsWriteDiary] = useState<boolean>(false);
  const [selectedDiaryIndex, setSelectedDiaryIndex] = useState<number | null>(
    null,
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchStoryList();
  }, [isWriteDiary]);

  const fetchStoryList = async () => {
    const data = await getStories();
    if (data) {
      setStoryList(data);
    } else {
      alert('Failed to fetch diary data');
    }
  };

  const renderStory = () => {
    return storyList.map((story, index) => (
      <Story
        key={story.diaryId}
        imgSrc={story.image}
        userName={story.name}
        viewStatus={story.viewStatus}
        onClick={() => setSelectedDiaryIndex(index)}
      />
    ));
  };

  const handleViewAllDiary = () => {
    console.log('전체보기');
  };

  const handleDiaryWritten = () => {
    setIsWriteDiary(false);
    fetchStoryList();
  };

  const handlePreviousStory = () => {
    setSelectedDiaryIndex((prevIndex) =>
      prevIndex !== null && prevIndex > 0
        ? prevIndex - 1
        : storyList.length - 1,
    );
  };

  const handleNextStory = () => {
    setSelectedDiaryIndex((prevIndex) =>
      prevIndex !== null && prevIndex < storyList.length - 1
        ? prevIndex + 1
        : 0,
    );
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex flex-row gap-[12px] mb-[51px] overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'smooth', maxWidth: '280px' }}
        >
          {renderStory()}
        </div>
      </div>
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
      <div className="flex justify-center mt-[40px] right-[20px] mb-[30px]">
        <button
          className="bg-primary-orange rounded-[3px] px-[56px] py-[14px] font-semibold text-[10px]"
          onClick={() => setIsWriteDiary(true)}
        >
          오늘 일기 쓰기
        </button>
        {isWriteDiary && <WriteDiary setIsWriteDiary={handleDiaryWritten} />}
      </div>
      {selectedDiaryIndex !== null && (
        <StoryViewer
          diaryId={storyList[selectedDiaryIndex].diaryId}
          onClose={() => setSelectedDiaryIndex(null)}
          onPrevious={handlePreviousStory}
          onNext={handleNextStory}
        />
      )}
    </div>
  );
};

export default DayRecord;
