import { postCreateThread } from "@apis/chat";
import Chat from "@components/Chat";
import ChatHeader from "@components/Chat/ChatHeader";
import InputMessage from "@components/Chat/InputMessage";
import { CHAT } from "@type/chat";
import { useEffect, useState } from "react";

const DorangChatPage = () => {
    const [messages, setMessages] = useState<CHAT[]>([]);

    const sendMessage = (message:string) => {
        handleChatMessage({ type: 'user', text: message }); 
    };

    const handleChatMessage = (message:{ type: "bot" | "user"; text: string; url?:string }) => {
        setMessages((prevState) => {
            return [...prevState, message];
        });
    };

    // useEffect( () => {
    //     CreateThread();
    // }, []);

    // const CreateThread = async() => {
    //     const response = await postCreateThread();
    //     if (response) {
    //         return true;
    //     }
    // }

    return (
    <>
        <ChatHeader />
        <div className="flex flex-col bg-gray-100">
            <div className="flex flex-col h-screen w-[100%]">
                <Chat messages={messages} />
                <InputMessage 
                    sendMessage = {sendMessage}
                    handleChatMessage = {handleChatMessage}
                />
        </div>
        </div>
        </>
    );
    }

export default DorangChatPage;