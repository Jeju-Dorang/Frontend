import { getAuthWithdraw } from "@apis/editMypage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    // console.log("Current cookies: ", document.URL);

    // const deleteCookie = () => {
    //     const cookies = document.cookie.split("; ");
    //     cookies.forEach(cookie => {
    //         const cookieName = cookie.split("=")[0].trim();
    //         if (cookieName.startsWith("_kau")) {
    //             // 도메인에 따라 다르게 설정된 쿠키들을 모두 제거
    //             document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.kakao.com`;
    //             document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=kakao.com`;
    //         }
    //     });
    //     console.log("_kau cookies deleted.");
    // };

    const removeKakaoCookies = (): void => {
            const cookies = document.cookie.split(';');
            console.log("document : ", document);
            console.log("cookies : ", document.cookie);
        
            for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        
            if (name.startsWith('_ka')) {
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.kakao.com`;
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.kakao.co.kr`;
            }
            }
        };

    const handleAuthWithdraw = async() => {
        setIsPopupOpen(false)

        const response = await getAuthWithdraw()
        if (response) {
            removeKakaoCookies();
            // deleteCookie();
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
                    <div className="fixed inset-0 bg-gray-dg bg-opacity-20 flex items-center justify-center">
                        <div className="flex flex-col w-[300px] h-[300px] rounded-[8px] shadow-sm bg-white border border-gray-dg items-center justify-center">
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