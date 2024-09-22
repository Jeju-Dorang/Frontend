<<<<<<< HEAD
import { getAllDiaries } from "@apis/allDiaries";
import DiaryPreviewBox from "@components/DiaryPreviewBox";
import { Diary } from "@type/diary";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllDiaries = () => {
    const [diaryList, setDiaryList] = useState<Diary[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDiaryListData();
    }, []);

    const fetchDiaryListData = async () => {
        const DiaryListData = await getAllDiaries();
        if (DiaryListData) {
            setDiaryList(DiaryListData);
        }
    }


    return(
        <div className="flex flex-col w-full h-screen mt-10">
            <div className="flex flex-row justify-between">
                <h2 className="font-semibold text-[15px] text-black ml-10">
                    📔 일기 전체보기
                </h2>
                <button onClick={() => {navigate('/mypage')}}
                        className="font-semibold text-[15px] text-gray-dg mr-10
                                    cursor-pointer hover:text-primary-orange">
                    마이페이지로 가기
                </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-7">
                {diaryList.map((diary, index) => (
                    <DiaryPreviewBox
                        key = {index}
                        title = {diary.title}
                        content = {diary.content}
                        status = {diary.secret}
                    />
                ))}
            </div>
        </div>

    );
}

=======
import DiaryPreviewBox from '@components/DiaryPreviewBox';
import { Diary } from '@type/diary';
import { useNavigate } from 'react-router-dom';

//더미데이터
// const Dummy : Diary[]= [
//     {
//         title: '오늘은 축구를 했다',
//         content :'아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고 아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고',
//         status : 'Private'
//     },
//     {
//         title: '오늘은 축구를 했다2',
//         content :'아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고 아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고',
//         status : 'Public'
//     },
//     {
//         title: '오늘은 축구를 했다3',
//         content :'아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고 아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고',
//         status : 'Public'
//     },
//     {
//         title: '오늘은 축구를 했다4',
//         content :'아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고 아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고',
//         status : 'Private'
//     },
//     {
//         title: '오늘은 축구를 했다5',
//         content :'아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고 아침 6시에 우장산 축구장에서 축구를 했다 근데 졌다 어쩌고',
//         status : 'Private'
//     }
// ]

const AllDiaries = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-screen mt-10">
      <div className="flex flex-row justify-between">
        <h2 className="font-semibold text-[15px] text-black ml-10">
          📔 일기 전체보기
        </h2>
        <button
          onClick={() => {
            navigate('/mypage');
          }}
          className="font-semibold text-[15px] text-gray-dg mr-10
                                    cursor-pointer hover:text-primary-orange"
        >
          마이페이지로 가기
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-7">
        {/* {Dummy.map((diary, index) => (
          <DiaryPreviewBox
            key={index}
            title={diary.title}
            content={diary.content}
            status={diary.status}
          />
        ))} */}
      </div>
    </div>
  );
};

>>>>>>> 2cf21a4fb447938483f77fad1a671e63834aebef
export default AllDiaries;
