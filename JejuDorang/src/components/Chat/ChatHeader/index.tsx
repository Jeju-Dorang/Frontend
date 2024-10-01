import Back from "#img/back.svg"
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed w-[100%] h-[41px] flex flex-row justify-start items-center bg-white">
            <button onClick ={() => navigate('/dorang')}>
                <img src = {Back} alt="뒤로가기" 
                    className='mr-[6px] ml-[15px]' />
            </button>
            <p className='font-bold text-[16px] text-primary-orange'>
                챗봇페이지
            </p>
        </div>

    );
}

export default ChatHeader;