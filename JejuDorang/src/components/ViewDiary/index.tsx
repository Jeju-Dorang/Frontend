import { useState, ChangeEvent, useEffect } from 'react';
import {  MAX_DIARY_TITLE_LENGTH, MAX_DIARY_CONTENT_LENGTH } from '@constants/maxTextLength';
import diaryDefault from '#img/diaryDefault.webp';
import { postDiary } from '@apis/diary';
import { Diary, Tag } from '@type/diary';
import { deleteDiary, getDiary, patchSecret } from '@apis/allDiaries';
// const dumy = {
//   diaryId: 1,
//   content: "어쩌고 저쩌고",
//   image: "photo_url",
//   date: "2024-07-20",
//   title : "이거 될려나",
//   secret: "PUBLIC", // 또는 "PRIVATE"
//   tagList: [
//       {
//           name: "바다"
//       },
//       {
//           name: "제주도"
//       }
//       ]
//   };

interface Props {
  diaryId : number;
  setIsViewDiary : (diaryId : number) => void;
}

const ViewDiary = ({diaryId, setIsViewDiary}:Props) =>{
  
  const [diary, setDiary] = useState<Diary>({
    title: "",
    content: "",
    imageUrl: "",
    date: "",
    secret: "",
    tagList: [],
  });

  const [isPublic, setIsPublic] = useState<boolean>(true);
  
  console.log("diary.secret : ", diary.secret);
  console.log("isPublic : ", isPublic);
  
  useEffect ( () => {
    fetchDiaryData(diaryId);
  }, []);

  const fetchDiaryData = async (diaryId:number) => {
        const response = await getDiary(diaryId);
        if (response) {
            setDiary(response);
            setIsPublic(diary.secret == "public");
        }
    }

    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    editSecret();
    setIsViewDiary(diaryId);
  };

  const setIsDeleteDiary = async() => {
    const response = await deleteDiary(diaryId);
    console.log("setIsDeleteDiary", response);
    if (response) {
      handleSubmit;
      return true
    }
  };

  const editSecret = async() => {
    let secret : string;
    {isPublic ?
      secret = "PUBLIC":
      secret = "PRIVATE"
    }
    const response = await patchSecret (diaryId, secret)
    if (response) {
      return true;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg h-[560px] w-[258px]">
        <div className="flex justify-between items-center mb-[6px]">
          <h1
            className="text-[15px] font-bold text-primary-orange w-[100px] placeholder-primary-orange">
              {diary.title}
          </h1>
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
        {/* <div className="text-[10px] text-gray-500">
          {diary.title.length} / MAX_DIARY_TITLE_LENGTH
        </div> */}
        {diary.date &&
          <span className="text-[10px] font-semibold text-gray-dg">
            {diary.date}
          </span>
        }
        <div className="mb-[7px] w-full h-[150px] relative">
          {diary.imageUrl ? (
            <img
              src={diary.imageUrl}
              alt="Preview"
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400">
              이미지가 없습니다
            </div>
          )}
        </div>
        <div className="relative mb-4">
          <p
            className="w-full p-2 border rounded resize-none overflow-hidden text-base"
            style={{
              backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)',
              backgroundSize: '100% 32px',
              lineHeight: '32px',
              padding: '0 8px',
              height: '160px',
            }}
          >
            {diary.content}
          </p>
          {/* <div className="text-right text-sm text-gray-500 mt-1">
            {diary.content.length} / {MAX_DIARY_CONTENT_LENGTH}
          </div> */}
        </div>
        <div className="w-full mb-[MAX_DIARY_TITLE_LENGTHpx] flex gap-[12px]">
          {diary.tagList.map((tag, index) => (
            <span
              key={index}
              className="w-[60px] text-[10px] font-medium p-2"
            >
              {tag.tagName}
          </span>
        
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 bg-gray-200 rounded w-[70px] h-[20px] text-[10px] hover:text-white"
            onClick={() => setIsDeleteDiary()}
          >
            삭제하기
          </button>
          <button
            type="submit"
            className="px-4 bg-primary-orange text-white rounded font-bold w-[70px] h-[20px] text-[10px] hover:text-black"
            onClick={handleSubmit}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDiary;