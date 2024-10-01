import Send from '#img/chat/send.webp';
import { getThreadList, postCreateMessage, postRunAssistant } from '@apis/chat';
import { useAuthStore } from '@states/useAuthStore';
import { CHAT } from '@type/chat';
import { FormEvent, useState } from 'react';

interface Props{
    sendMessage : (text:string) => void;
    handleChatMessage : (message:CHAT) => void;
}

const InputMessage = ({sendMessage, handleChatMessage}:Props) => {
    const interests = useAuthStore.getState().interest;
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
        const response = await postCreateMessage(message, interests);
        // delay가 있어야 데이터가 제대로 전달됨
        delay(1000);
        if (response) {
            const assistantResponse = await postRunAssistant();
            if (assistantResponse){
                const chatResponse = await waitForAssistantResponse();
                handleChatMessage({ type: 'bot', text: chatResponse});
            }
        }
    }

    // Assistant의 응답을 기다리는 함수
    const waitForAssistantResponse = async () => {
        let hasAssistantMessage : boolean = false;

        while (!hasAssistantMessage) {
            await delay(2000); // 1.8초 대기 후
            const chatMessages = await getThreadList();

            // 첫 번째 메시지가 assistant인지 확인
            if (chatMessages != false) {
                hasAssistantMessage = true;
                return chatMessages
            }
        }
    };
    

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