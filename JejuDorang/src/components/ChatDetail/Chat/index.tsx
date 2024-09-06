import DorangMessage from "./DorangMessage";
import UserMessage from "./UserMessage";
import { CHAT } from "@type/chat";

interface Props {
    interests : string[]
    messages : CHAT[]
}

const Chat = ({interests, messages}:Props) => {
    
    {/* 디버깅코드 */}
    console.log("messages" , messages)

    return (
        <div className="w-[100%] h-screen flex flex-col mt-[15px] overflow-y-auto">
            <p className="flex ml-[130px] mt-[10px] text-primary-orange font-semibold text-[12px] items-center">
                여행키워드 : {interests.join(', ')}
            </p>
            <div className="mt-[10px]">
                <DorangMessage 
                    message="안녕하세요 챗봇 도랑이입니다.
어떤 여행지를 추천해드릴까요?"
                />

                {messages.map((msg, index) => (
                    msg.type === 'user' ? 
                        <UserMessage key={index} message={msg.text} /> :
                        <DorangMessage key={index} message={msg.text}/>
                        // url={msg.url} 나중에 도랑이 메시지에 url도 넣을거임
                    ))}
                
            </div>
        </div>

    );
}

export default Chat;