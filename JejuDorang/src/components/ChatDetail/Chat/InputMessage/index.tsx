import Send from '#img/chat/send.webp';

const InputMessage = () => {
    return(

        <form className="flex flex-row w-[100%] h-[90px] justify-between items-center gap-2 bg-white">
            <textarea 
                className="ml-5 h-[48px] w-full rounded-[11px] items-center justify-start resize-none
                        text-black border border-gray-dg text-[12px]"
                placeholder="메시지를 입력하세요"
            />
            <img src = {Send} alt = "전송버튼" className='w-[46px] h-[46px] mr-[18px]' />
        </form>
        
    );
}

export default InputMessage;