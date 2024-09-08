import { useEffect, useState } from "react";
import Chat from "./Chat";
import Onboarding from "./Onboarding";
import InputMessage from "./Chat/InputMessage";
import ChatMainHeader from "@components/ChatMainHeader";
import { CHAT } from "@type/chat";
import Header from "./Chat/Header";

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
    
    useEffect(() => {
        if (!openOnboarding) {
            setIsNavVisible(false);
            setMessages([]);
        }
    }, [openOnboarding]);
    
        


    return (
        <>
        {openOnboarding ? <ChatMainHeader /> : <Header setOpenOnboarding={setOpenOnboarding} /> }
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