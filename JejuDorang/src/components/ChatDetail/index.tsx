import { useState } from "react";
import Chat from "./Chat";
import Onboarding from "./Onboarding";


const ChatDetail = () => {
    const [openOnboarding, setOpenOnboarding] = useState<boolean>(true);
    const [interests, setInterests] = useState<string[]>([]); 

    const handleCloseOnboarding = (savedInterests:string[]) => {
        setOpenOnboarding(!openOnboarding)
        setInterests(savedInterests); 
    }


    return (
        <div className="h-screen bg-gray-100">
        {openOnboarding ?
            <Onboarding openOnboarding={handleCloseOnboarding}/> :
            <Chat interests={interests} />
        }
        </div>

    );

}

export default ChatDetail;