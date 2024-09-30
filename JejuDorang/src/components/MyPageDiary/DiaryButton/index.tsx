import { useEffect } from "react";
import allView from '#img/myPage/diary/allView.webp'
import like from '#img/myPage/diary/like.webp'
import { useNavigate } from "react-router-dom";

const DiaryButton= () => {
    useEffect(() => {}, []);
    const navigate = useNavigate();

    // 버튼에 사용할 데이터를 배열로 관리
    const buttonData = [
        { label: '전체보기', icon: allView, path: '/mypage/allDiaries' },
        { label: 'TOP1', icon: like},
        { label: 'TOP2', icon: like},
        { label: 'TOP3', icon: like},
    ];

    return (
        <div className="flex flex-row items-center justify-center mt-3 gap-3 mx-7">
            {buttonData.map((button, index) => (
                <button
                    key={index}
                    onClick={button.path ? () => navigate(button.path) : undefined}
                    className="flex flex-col gap-1 w-20 h-20 rounded-lg 
                                border-gray-lg border-2 shadow-current items-center justify-center
                                cursor-pointer hover:bg-gray-lg hover:border-primary-orange"
                >
                    <img src={button.icon} className="w-8 h-8" alt={button.label} />
                    <p className="text-black font-medium text-[14px]">{button.label}</p>
                </button>
            ))}
        </div>
    );
};

export default DiaryButton;