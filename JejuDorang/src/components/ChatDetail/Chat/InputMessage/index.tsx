import Send from '#img/chat/send.webp';
import { FormEvent, useState } from 'react';

interface Props{
    sendMessage : (text:string) => void;
}

const InputMessage = ({sendMessage}:Props) => {
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        if (message.trim()) {
            sendMessage(message); 
            setMessage(''); // 입력창 비우기
        }
    };

    return(
        <form  onSubmit={handleSubmit} className="flex flex-row w-[100%] h-[90px] justify-between items-center gap-2 bg-white">
            <textarea 
                className="ml-5 h-[48px] w-full rounded-[11px] items-center justify-start resize-none
                        text-black border border-gray-dg text-[18px] p-3 "
                placeholder="메시지를 입력하세요"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">
                <img src = {Send} alt = "전송버튼" className='w-[36px] h-[36px] mr-[18px]' />
            </button>
        </form>
        
    );
}

export default InputMessage;