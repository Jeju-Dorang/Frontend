import { useEffect } from "react";
import { Link } from "react-router-dom";
import DiaryButton from "./DiaryButton";

const MyPageDiary= () => {
    useEffect(() => {}, []);
    return (
        <>
        <div className='flex flex-row justify-between items-center ml-7'>
            <h1 className='mt-5 font-semibold text-black text-[21px]'>
                일기
            </h1>
            <Link
                to="/record"
                className="mt-5 mr-5 font-bold text-[15px] 
                text-gray-dg cursor-pointer hover:text-primary-orange"
                >
                작성하기
            </Link>
        </div>
        <DiaryButton />
        </>
    );
};

export default MyPageDiary;