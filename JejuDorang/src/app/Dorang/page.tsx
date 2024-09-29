import ChatOnboarding from "@components/ChatOnboarding";
import ChatMainHeader from "@components/ChatMainHeader";

const Dorang =() =>{
    return (
        <>
        <ChatMainHeader />
        <div className="flex flex-col bg-gray-100">
            <ChatOnboarding />
        </div>
        </>
    );
    

}

export default Dorang;