import Send from '#img/chat/send.webp';
import { getThreadList, postCreateMessage, postRunAssistant } from '@apis/chat';
import { CHAT } from '@type/chat';
import { FormEvent, useState } from 'react';

interface Props{
    sendMessage : (text:string) => void;
    interests : string[];
    handleChatMessage : (message:CHAT) => void;
}

const InputMessage = ({interests, sendMessage, handleChatMessage}:Props) => {
    const [message, setMessage] = useState<string>('');
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        if (message.trim()) {
            sendMessage(message);
            receiveMessage(message, interests);
            setMessage(''); // 입력창 비우기
        }
    };

    const receiveMessage = async(message:string, interests:string[]) => {
        const response = await postCreateMessage(message, interests)
        // delay가 있어야 데이터가 제대로 전달됨 -> 핀을 추가해야할듯
        if (response) {
            await delay(1000);
            const assistantResponse = await postRunAssistant();
            if (assistantResponse){
                await delay(5000);
                const chatResponse = await getThreadList()
                console.log("input message response 테스트 : ", chatResponse);
                handleChatMessage({ type: 'bot', text: chatResponse});
            }
        }
    }
    

    return(
        <form  onSubmit={handleSubmit} className="flex flex-row w-[100%] h-[90px] justify-between items-center gap-2 bg-white mt-3">
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