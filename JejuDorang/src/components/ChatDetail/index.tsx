import { useState } from "react";
import Interest from "./Interest";


const ChatDetail = () => {
    const [openOnboarding, setOpenOnboarding] = useState<boolean>(true);
    const [interests, setInterests] = useState<string[]>([]); 

    const handleCloseOnboarding = (savedInterests:string[]) => {
        setOpenOnboarding(!openOnboarding)
        setInterests(savedInterests); 
    }


    return (
        <>
        {openOnboarding && (
            <Interest openOnboarding={handleCloseOnboarding}/>
            
        )}
        <p>{interests}</p>
        </>

    );

}

export default ChatDetail;