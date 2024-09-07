import { useEffect, useState } from "react";
import Chat from "./Chat";
import Onboarding from "./Onboarding";
import InputMessage from "./Chat/InputMessage";
import ChatHeader from "@components/ChatHeader";
import { CHAT } from "@type/chat";

interface Props {
    setIsNavVisible: (visible: boolean) => void;
}

const ChatDetail = ({ setIsNavVisible }: Props) => {
    const [openOnboarding, setOpenOnboarding] = useState<boolean>(true);
    const [interests, setInterests] = useState<string[]>([]);
    const [messages, setMessages] = useState<CHAT[]>([]);

    const sendMessage = (message:string) => {
        handleChatMessage({ type: 'user', text: message }); 
    };

    const handleChatMessage = (message:{ type: "bot" | "user"; text: string; url?:string }) => {
        setMessages((prevState) => {
            return [...prevState, message];
        });
    }

    const handleCloseOnboarding = (savedInterests:string[]) => {
        setOpenOnboarding(!openOnboarding)
        setInterests(savedInterests); 
    }


    const handleScroll = () => {
        const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

        // 스크롤이 끝까지 내려가면 NavBar를 표시하고, 그렇지 않으면 숨기기
        if (isScrolledToBottom) {
            setIsNavVisible(true);
        } else {
            setIsNavVisible(false);
        }
    };
    
      // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가
    useEffect(() => {
        if (openOnboarding) {
            setIsNavVisible(false);
        }

        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [openOnboarding]);
    
        


    return (
        <>
        {openOnboarding && <ChatHeader />}
        <div className="flex flex-col h-screen w-[100%] bg-gray-100">
        {openOnboarding ?
            <Onboarding openOnboarding={handleCloseOnboarding}/> :
            <>
                
                <Chat interests={interests} messages={messages} />
                <InputMessage sendMessage = {sendMessage} />
            </>
        }
        </div>
        </>

    );

}

export default ChatDetail;