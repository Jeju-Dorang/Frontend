import Back from "#img/back.svg"
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

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
            <button onClick={() => navigate('/mypage')}
                    className="mr-6 text-gray-dg font-semibold text-[18px]
                                cursor-pointer hover:text-black">
                    완료
            </button>

        </div>

    );
}

export default Header;