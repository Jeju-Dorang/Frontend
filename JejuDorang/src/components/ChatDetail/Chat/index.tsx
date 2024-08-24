import { useState } from "react";
import DorangMessage from "./DorangMessage";
import UserMessage from "./UserMessage";

interface Props {
    interests : string[]
}

const Chat = ({interests}:Props) => {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    return (

        <div className="w-full h-full flex flex-col mt-[15px]">
            <p className="flex ml-[130px] mt-[10px] text-primary-orange font-semibold text-[12px]">
                여행키워드 : {interests.join(', ')}
            </p>
            <div className="mt-[10px]">
                <DorangMessage 
                    message="안녕하세요 챗봇 도랑이입니다.
어떤 여행지를 추천해드릴까요?"
                />
                <UserMessage
                    message="안녕 관광지 추천해줘."
                />
            </div>
        </div>

    );
}

export default Chat;