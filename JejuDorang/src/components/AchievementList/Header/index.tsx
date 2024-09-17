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
                    마이페이지
                </p>
            </div>
        </div>

    );
}

export default Header;