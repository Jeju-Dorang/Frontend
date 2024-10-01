import { getAuthWithdraw } from "@apis/editMypage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleAuthWithdraw = async() => {
        setIsPopupOpen(false)

        const response = await getAuthWithdraw()
        if (response) {
            navigate('/login');
        }
    }


    return (
        <>
            <div className="flex flex-col ml-7 mr-7 mb-4 mt-6 justify-start items-start">
                <button onClick = {() => setIsPopupOpen(true)}
                        className="text-black font-semibold text-[16px] underline
                                    cursor-pointer hover:text-primary-blue">
                    탈퇴하기
                </button>
                <h3 className="text-gray-dg font-semibold text-[14px]">
                    탈퇴하면 정보를 복구할 수 없습니다.
                </h3>
            </div>

            {isPopupOpen && (
                <>
                    <div className="fixed inset-0 bg-gray-dg bg-opacity-20 flex items-center justify-center"
                        onClick = {() => setIsPopupOpen(!isPopupOpen)}>
                        <div className="flex flex-col w-[300px] h-[300px] rounded-[8px] shadow-sm bg-white border border-gray-dg items-center justify-center"
                            onClick={(e) => e.stopPropagation()}>
                            <h2 className='font-semibold text-[28px] text-primary-orange'>
                                정말 탈퇴하시겠어요?
                            </h2>
                            <h3 className='font-medium text-[16px] text-[#777] mt-2'>
                                탈퇴하면 정보를 복구할 수 없어요
                            </h3>
                            <div className="flex flex-col mt-4">
                                <button 
                                    onClick={() => setIsPopupOpen(false)} 
                                    className="bg-primary-orange py-2 w-[242px] h-[40px] text-white
                                                rounded-[8px] items-center justify-center text-[16px] font-semibold"
                                >
                                    돌아가기
                                </button>
                                <button onClick = {handleAuthWithdraw}
                                        className="text-gray-dg font-medium text-[16px] underline
                                                    cursor-pointer hover:text-primary-blue mt-3">
                                    탈퇴하기
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>

    );
}

export default Withdraw;