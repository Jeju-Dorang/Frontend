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

export default AllDiaries;
