import {useEffect, useState } from "react";

interface Props {
    interest : string;
    onInterestChange: (interest: string, isClicked: boolean) => void;
}

const InterestBox = ({interest, onInterestChange}:Props) => {
    
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };
    
    useEffect(() => {
        if (onInterestChange) {
            onInterestChange(interest, isClicked);
        }
    }, [isClicked]);



    return (
        <button 
                onClick={handleClick} 
                className={`flex h-[24px] rounded-[100px] font-bold text-[13px] border
                        border-gray-dg items-center justify-center px-[13px] py-[4px]
                        ${isClicked ? 'bg-primary-orange text-black' : ' bg-white text-primary-orange'}`}
        >
            {interest}
        </button>
    );
}

export default InterestBox;