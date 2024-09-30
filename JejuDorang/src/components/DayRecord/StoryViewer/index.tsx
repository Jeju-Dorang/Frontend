import { useState, useEffect } from 'react';
import { DetailStory } from '@type/storyItem';
import { getStory, postStoryLike } from '@apis/diary';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface Props {
  diaryId: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const StoryViewer = ({ diaryId, onClose, onPrevious, onNext }: Props) => {
  const [diaryData, setDiaryData] = useState<DetailStory | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    fetchDiaryData(diaryId);
  }, [diaryId]);

  const fetchDiaryData = async (id: number) => {
    const response = await getStory(id);
    if (!response) return;
    setDiaryData(response);
    setIsLiked(response.alreadyLike);
  };

  const toggleLike = async () => {
    setIsLiked(!isLiked);
    const res = await postStoryLike(diaryId);
    if (!res) alert('좋아요 실패');
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const renderTagList = () => {
    if (!diaryData) return null;
    return (
      <>
        {diaryData.tagList.map((tag, index) => (
          <span key={index} className="text-[15px] font-medium">
            #{tag.tagName}
          </span>
        ))}
      </>
    );
  };

  if (!diaryData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]">
      <div className="relative w-full max-w-[440px] mx-auto px-4">
        <button
          onClick={onPrevious}
          className="absolute left-2 md:left-[-48px] top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 z-[1010]"
        >
          <ChevronLeft size={32} className="hover:text-primary-orange" />
        </button>
        <div className="bg-white rounded-[32px] w-full relative">
          <div className="p-4">
            <div className="flex justify-between items-start mb-[11px]">
              <div>
                <h2 className="text-[20px] text-primary-orange font-bold">
                  {diaryData.name}
                </h2>
                <p className="text-[10px] text-gray-dg font-semibold">
                  {diaryData.date}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-primary-orange hover:text-gray-700 text-[28px] w-[32px] h-[32px]"
              >
                &times;
              </button>
            </div>
            <div className="relative" onClick={toggleContent}>
              <img
                src={diaryData.image}
                alt="스토리 이미지"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              {showContent && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 rounded-lg overflow-y-auto">
                  <p className="text-white text-[18px] font-semibold underline whitespace-pre-wrap break-words w-full">
                    {diaryData.content}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-[20px] items-center">
              {renderTagList()}
              <button onClick={toggleLike} className="ml-auto mr-[5px]">
                <Heart
                  size={32}
                  className={`transition-all duration-300 ease-in-out hover:fill-red-300 ${
                    isLiked ? 'text-red-500 fill-red-700' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onNext}
          className="absolute right-2 md:right-[-48px] top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 z-[1010]"
        >
          <ChevronRight size={32} className="hover:text-primary-orange" />
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;
