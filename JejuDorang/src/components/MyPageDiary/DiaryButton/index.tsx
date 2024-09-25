import { useEffect } from "react";
import allView from '#img/myPage/diary/allView.webp'
import like from '#img/myPage/diary/like.webp'
import { useNavigate } from "react-router-dom";

const DiaryButton= () => {
    useEffect(() => {}, []);
    const navigate = useNavigate();

    return (
        <div className="flex flex-row items-center justify-center mt-3 gap-2">
            
            <button onClick={() => navigate('/mypage/allDiaries') }
                    className="flex flex-col gap-1 w-[79px] h-[74px] rounded-lg 
                            border-gray-lg border-2 shadow-current items-center justify-center
                            cursor-pointer hover:bg-gray-lg hover:border-primary-orange">
                <img src={allView} className="w-[30px] h-[30px]" />
                <p className="text-black font-medium text-[14px">전체보기</p>
            </button>
            <button className="flex flex-col gap-1 w-[79px] h-[74px] rounded-lg 
                            border-gray-lg border-2 shadow-current items-center justify-center
                            cursor-pointer hover:bg-gray-lg hover:border-primary-orange">
                <img src={like} className="w-[30px] h-[30px]" />
                <p className="text-black font-medium text-[14px">TOP1</p>
            </button>
            <button className="flex flex-col gap-1 w-[79px] h-[74px] rounded-lg 
                            border-gray-lg border-2 shadow-current items-center justify-center
                            cursor-pointer hover:bg-gray-lg hover:border-primary-orange">
                <img src={like} className="w-[30px] h-[30px]" />
                <p className="text-black font-medium text-[14px">TOP2</p>
            </button>
            <button className="flex flex-col gap-1 w-[79px] h-[74px] rounded-lg 
                            border-gray-lg border-2 shadow-current items-center justify-center
                            cursor-pointer hover:bg-gray-lg hover:border-primary-orange">
                <img src={like} className="w-[30px] h-[30px]" />
                <p className="text-black font-medium text-[14px">TOP3</p>
            </button>
        
        </div>
    );
};

export default DiaryButton;