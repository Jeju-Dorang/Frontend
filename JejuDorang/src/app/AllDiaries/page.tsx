import { getAllDiaries } from "@apis/allDiaries";
import DiaryPreviewBox from "@components/DiaryPreviewBox";
import ViewDiary from "@components/ViewDiary";
import { DiaryPreview } from "@type/diaryPreview";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DorangProfile from "#img/dorangProfile.webp";

const AllDiaries = () => {
    const [diaryList, setDiaryList] = useState<DiaryPreview[]>([]);
    const [isViewDiary, setIsViewDiary] = useState<boolean>(false);
    const [isviewDiaryId, setIsViewDiaryId] = useState<number>(0)

    const navigate = useNavigate();

    useEffect(() => {
        fetchDiaryListData();
    }, [isViewDiary]);

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

    console.log("diarylist : ", diaryList);

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
            {diaryList.length === 0 ?
            <div className="flex flex-col justify-center items-center mx-10 mt-16">
                <div className="flex flex-col bg-gray-lg rounded-[20px] h-96 w-full mx-10 items-center justify-center gap-3">
                    <img
                        src ={DorangProfile}
                        className="w-20 h-20"
                    />
                    <p className="text-darkest-gray font-semibold text-[17px] text-center">
                        작성한 일기가 없어요<br/>
                        일기 쓰러 가볼까요?
                    </p>
                    <button onClick={() => navigate('/record')}
                            className="w-[80%] h-10 rounded-[10px] text-[15px] bg-primary-orange text-white font-semibold hover:text-black">
                                일기 작성하러 가기
                    </button>
                </div>
            </div>
            :
            <div className="flex flex-col justify-center items-center gap-2 mt-7">
                {diaryList.map((diary, index) => (
                    <DiaryPreviewBox
                        key = {index}
                        diaryId = {diary.diaryId}
                        title = {diary.title}
                        content = {diary.content}
                        secret = {diary.secret}
                        setIsViewDiary = {handleDiaryView}
                    />
                ))}
            </div>
            }
            {isViewDiary && 
                <ViewDiary 
                    diaryId = {isviewDiaryId}
                    setIsViewDiary = {handleDiaryView} 
                />}
        </div>

    );
}

export default AllDiaries;
