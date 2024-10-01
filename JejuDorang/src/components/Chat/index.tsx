import { useEffect, useRef } from "react";
import DorangMessage from "./DorangMessage";
import UserMessage from "./UserMessage";
import { CHAT } from "@type/chat";
import SpinnerDorangMessage from "./SpinnerDorangMessage";
import { useAuthStore } from "@states/useAuthStore";

interface Props {
    messages : CHAT[];
}

const Chat = ({messages}:Props) => {
    const interests = useAuthStore.getState().interest;

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // 메시지가 변경될 때마다 스크롤을 맨 아래로 이동시키는 useEffect
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]); // messages가 변경될 때마다 실행

    return (
        <div className="w-[100%] flex flex-col mt-[15px] overflow-y-auto">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center mt-[51px] h-[24px] rounded-[100px] 
                                border border-gray-dg bg-white">
                    {interests &&
                        <p className="flex text-primary-orange font-bold text-[13px] m-2">
                        여행키워드 : {interests.join(', ')}
                        </p>
                    }
                </div>
            </div>
            <div className="mt-[10px]">
                <DorangMessage 
                    message="안녕하세요 챗봇 도랑이입니다.
어떤 여행지를 추천해드릴까요?"
                />

                {messages.map((msg, index) => (
                    msg.type === 'user' ? 
                        <UserMessage key={index} message={msg.text} /> :
                        <DorangMessage key={index} message={msg.text}/>
                    ))}
                {messages.length > 0 && messages[messages.length - 1].type === 'user' && (
                    <div>
                        <SpinnerDorangMessage />
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
        </div>

    );
}

export default Chat;