import ChatDetail from "@components/ChatDetail";

interface Props {
    setIsNavVisible: (visible: boolean) => void;
}

const Dorang =({ setIsNavVisible }: Props) =>{
    return (
        <>
        <ChatDetail setIsNavVisible={setIsNavVisible}/>
        </>
    );
    

}

export default Dorang;