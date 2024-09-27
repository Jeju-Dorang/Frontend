import { getAllDiaries } from "@apis/allDiaries";
import DiaryPreviewBox from "@components/DiaryPreviewBox";
import ViewDiary from "@components/ViewDiary";
import { Diary } from "@type/diary";
import { DiaryPreview } from "@type/diaryPreview";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dumy = {
    diaryId: 1,
    content: "어쩌고 저쩌고",
    image: "photo_url",
    date: "2024-07-20",
    title : "이거 될려나",
    secret: "public", // 또는 "PRIVATE"
    tagList: [
        {
            name: "바다"
        },
        {
            name: "제주도"
        }
        ]
    };

const AllDiaries = () => {
    const [diaryList, setDiaryList] = useState<DiaryPreview[]>([]);
    const [isViewDiary, setIsViewDiary] = useState<boolean>(false);
    const [isviewDiaryId, setIsViewDiaryId] = useState<number>(0)

    const navigate = useNavigate();

    useEffect(() => {
        fetchDiaryListData();
    }, []);

    const handleDiaryView = (diaryId?:number) => {
        setIsViewDiary(!isViewDiary);
        if (diaryId){
            setIsViewDiaryId(diaryId);
        }
    };

    const fetchDiaryListData = async () => {
        const DiaryListData = await getAllDiaries();
        if (DiaryListData) {
            setDiaryList(DiaryListData);
        }
    };


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
                {/* {diaryList.map((diary, index) => (
                    <DiaryPreviewBox
                        key = {index}
                        diaryId = {diary.diaryId}
                        title = {diary.title}
                        content = {diary.content}
                        secret = {diary.secret}
                        setIsViewDiary = {handleDiaryView}
                    />
                ))} */}
                <DiaryPreviewBox
                        diaryId = {dumy.diaryId}
                        title = {dumy.title}
                        content = {dumy.content}
                        secret = {dumy.secret}
                        setIsViewDiary = {handleDiaryView}
                    />
            </div>
            {isViewDiary && 
                <ViewDiary 
                    diaryId = {isviewDiaryId}
                    setIsViewDiary = {handleDiaryView} 
                />}
        </div>

    );
}

export default AllDiaries;
