import { useEffect, useState } from "react";
import Chat from "./Chat";
import Onboarding from "./Onboarding";
import InputMessage from "./Chat/InputMessage";
import ChatHeader from "@components/ChatHeader";
import Footer from "@components/Footer";
import { CHAT } from "@type/chat";


const ChatDetail = () => {
    const [openOnboarding, setOpenOnboarding] = useState<boolean>(true);
    const [interests, setInterests] = useState<string[]>([]);
    const [showFooter, setShowFooter] = useState(false);
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
    
    // 스크롤 감지 이벤트
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
    
            // 페이지의 하단에 도달하면 추가 푸터 표시
            if (scrollTop + clientHeight >= scrollHeight - 10) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
        


    return (
        <>
        {openOnboarding && <ChatHeader />}
        <div className="flex flex-col h-screen w-[100%] bg-gray-100">
        {openOnboarding ?
            <Onboarding openOnboarding={handleCloseOnboarding}/> :
            <Chat interests={interests} messages={messages} />
        }
        {(!openOnboarding && !showFooter) ? 
            <InputMessage sendMessage = {sendMessage} /> : <Footer />}
        
        </div>
        </>

    );

}

export default ChatDetail;