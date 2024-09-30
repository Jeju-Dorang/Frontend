import {MAX_PROFILE_DETAIL_LENGTH} from '@constants/maxTextLength'
import { useState } from 'react';

interface Props {
    memberComment : string;
    setContent : (content:string) => void;
}

const Message = ({memberComment, setContent}:Props) => {
    const [message, setMessage] = useState<string>('');
    const [messageLength, setMessageLength] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        
        if (inputValue.length > MAX_PROFILE_DETAIL_LENGTH){
            alert("최대글자수를 초과하였습니다.")
            return
        }

        setMessage(inputValue);  // 메시지 업데이트
        setMessageLength(inputValue.length);  // 메시지 길이 업데이트
        setContent(message);
    };

    return (
        <>
            <div className="flex flex-col ml-7 mr-7 mb-4 mt-6">
                <h3 className="text-black font-semibold text-[16px]">
                    상태메세지
                </h3>
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder={memberComment}
                    className="bg-gray-lg text-black rounded-[10px] mt-2
                                p-3 justify-start items-center text-[14px]
                                placeholder-gray-500"
                />
                <div className='flex flex-row text-[13px] font-semibold justify-end mt-1'>
                    <p className='text-black'>{messageLength}</p>
                    <p className='text-gray-dg'>/{MAX_PROFILE_DETAIL_LENGTH}</p>
                </div>
            </div>
            <hr />
        </>

    );
}

export default Message;