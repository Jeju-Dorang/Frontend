import { useState, ChangeEvent } from 'react';
import {
  MAX_DIARY_TITLE_LENGTH,
  MAX_DIARY_CONTENT_LENGTH,
} from '@constants/maxTextLength';
import diaryDefault from '#img/diaryDefault.webp';
import { postDiary } from '@apis/diary';
import { Tag } from '@type/diary';

interface Props {
  setIsWriteDiary?: () => void;
  achievementId?: number;
}

const WriteDiary = ({ setIsWriteDiary, achievementId }: Props) => {
  const [title, setTitle] = useState<string>('');
  const [diaryContent, setDiaryContent] = useState<string>('');
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>(['', '', '']);

  const todayDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title === '' || diaryContent === '') {
      return alert('제목과 내용을 입력해주세요.');
    }
    const tagList: Tag[] = tags
      .filter((tag) => tag !== '')
      .map((tag) => ({ tagName: tag }));

    const diaryData = {
      title: title,
      content: diaryContent,
      imageUrl: imagePreview || diaryDefault,
      secret: isPublic ? 'public' : 'private',
      achievementId: achievementId,
      tagList: tagList,
    };
    const res = await postDiary(diaryData);
    if (res === false) {
      alert('일기 작성에 실패했습니다.');
      return;
    }
    setIsWriteDiary?.();
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    if (input.length <= MAX_DIARY_CONTENT_LENGTH) {
      setDiaryContent(input);
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg h-[560px] w-[258px]">
        <div className="flex justify-between items-center mb-[6px]">
          <input
            type="text"
            className="text-[15px] font-bold text-primary-orange w-[100px] placeholder-primary-orange"
            placeholder="제목"
            maxLength={MAX_DIARY_TITLE_LENGTH}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex items-center">
            <button
              onClick={() => setIsPublic(!isPublic)}
              className={`w-12 h-6 flex items-center rounded-full p-1 ${
                isPublic ? 'bg-green-400' : 'bg-red-600'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  isPublic ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className="ml-2 text-[15px] font-semibold">
              {isPublic ? 'Public' : 'Private'}
            </span>
          </div>
        </div>
        <div className="text-[10px] text-gray-500">
          {title.length} / {MAX_DIARY_TITLE_LENGTH}
        </div>
        <span className="text-[10px] font-semibold text-gray-dg">
          {todayDate}
        </span>
        <div className="mb-[7px] w-full h-[150px] relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400">
              클릭하여 이미지 업로드
            </div>
          )}
        </div>
        <div className="relative mb-4">
          <textarea
            className="w-full p-2 border rounded resize-none overflow-hidden text-base"
            value={diaryContent}
            onChange={handleTextareaChange}
            placeholder="오늘의 이야기를 적어주세요..."
            style={{
              backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)',
              backgroundSize: '100% 32px',
              lineHeight: '32px',
              padding: '0 8px',
              height: '160px',
            }}
            maxLength={MAX_DIARY_CONTENT_LENGTH}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {diaryContent.length} / {MAX_DIARY_CONTENT_LENGTH}
          </div>
        </div>
        <div className="w-full mb-[MAX_DIARY_TITLE_LENGTHpx] flex gap-[12px]">
          {tags.map((tag, index) => (
            <input
              key={index}
              className="w-[60px] text-[10px] font-medium p-2"
              type="text"
              placeholder="#태그추가"
              maxLength={10}
              value={tag}
              onChange={(e) => handleTagChange(index, e.target.value)}
            />
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 bg-gray-200 rounded w-[70px] h-[20px] text-[10px] hover:text-white"
            onClick={() => setIsWriteDiary?.()}
          >
            취소
          </button>
          <button
            type="submit"
            className="px-4 bg-primary-orange text-white rounded font-bold w-[70px] h-[20px] text-[10px] hover:text-black"
            onClick={handleSubmit}
          >
            작성완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteDiary;
