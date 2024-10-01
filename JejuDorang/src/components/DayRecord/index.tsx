import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoryItem } from '@type/storyItem';
import { getStories } from '@apis/diary';
import CustomCalendar from './CustomCalendar';
import Story from './Story';
import WriteDiary from './WriteDiary';
import StoryViewer from './StoryViewer';
import { ChevronRight } from 'lucide-react';

const DayRecord = () => {
  const [storyList, setStoryList] = useState<StoryItem[]>([]);
  const [isWriteDiary, setIsWriteDiary] = useState<boolean>(false);
  const [selectedDiaryIndex, setSelectedDiaryIndex] = useState<number | null>(
    null,
  );
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [showRightIndicator, setShowRightIndicator] = useState(true);

  useEffect(() => {
    fetchStoryList();
  }, [isWriteDiary]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        setShowRightIndicator(
          container.scrollLeft < container.scrollWidth - container.clientWidth,
        );
      };

      container.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [storyList]);

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
    navigate('/mypage/allDiaries');
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
    <div className="max-w-[440px] mx-auto mt-[40px]">
      <div className="relative px-[20px]">
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex flex-row gap-[12px] mb-[51px] mx-[25px] overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth', paddingRight: '20px' }}
          >
            {renderStory()}
          </div>
          {showRightIndicator && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 opacity-60">
              <ChevronRight size={20} />
            </div>
          )}
        </div>
      </div>
      <h1 className="text-[14px] mb-[8px] font-semibold ml-[40px]">내 일기</h1>
      <div className="flex w-full mb-[17px] justify-between px-[40px]">
        <span className="text-[11px] font-semibold text-gray-lg">
          한달 동안의 추억을 기록해보세요
        </span>
        <button
          className="text-[10px] font-semibold hover:text-primary-orange"
          onClick={handleViewAllDiary}
        >
          전체 보기
        </button>
      </div>
      <CustomCalendar />
      <div className="flex justify-center mt-[40px] mb-[30px]">
        <button
          className="bg-primary-orange rounded-[3px] px-[56px] py-[14px] font-semibold text-[10px] hover:text-white"
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
