import Back from "#img/back.svg"
import { patchMypageProfileContent, patchMypageProfileImage } from "@apis/editMypage";
import { useNavigate } from "react-router-dom";

interface Props {
    imageSrc ?: File;
    content : string;
}


const Header = ({imageSrc, content}:Props) => {
    const navigate = useNavigate();

    console.log("header imageSrc : ", imageSrc);

    const handleChangeProfile = async() => {
        try {
            if (imageSrc) {
                const patchImgResponse = await patchMypageProfileImage(imageSrc);
                console.log("Image updated: ", patchImgResponse);
            }

            // 프로필 내용 업데이트
            const patchContentResponse = await patchMypageProfileContent(content);
            console.log("Content updated: ", patchContentResponse);

            // 업데이트 후 마이페이지로 이동
            navigate('/mypage');
        } catch (error) {
            console.error("Error updating profile: ", error);
        }
    };
    
    return (
        <div className="mt-1 w-[100%] h-[41px] flex flex-row justify-between items-center">
            <div className="flex flex-row">
                <button onClick={() => navigate('/mypage')}>
                    <img src = {Back} alt="뒤로가기" 
                        className='mr-[6px] ml-[15px]' />
                </button>
                <p className='font-bold text-[16px] text-primary-orange'>
                    프로필 설정
                </p>
            </div>
            {/* onClick시 api 요청 코드 추가 */}
            <button onClick={handleChangeProfile}
                    className="mr-6 text-gray-dg font-semibold text-[18px]
                                cursor-pointer hover:text-black">
                    완료
            </button>

        </div>

    );
}

export default Header;