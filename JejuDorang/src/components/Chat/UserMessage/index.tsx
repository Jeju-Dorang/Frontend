interface Props {
    message: string; 
}


const UserMessage = ({ message }:Props) =>  {
    return (
        <div className="flex justify-end mr-[37px]">
            <div className="mt-[10px] px-[12px] py-[8px] max-w-[242px]
                            border border-gray-dg rounded-[17px] bg-gray-lg">
                <p className="font-medium text-[13px] text-black whitespace-pre-wrap">
                    {message}
                </p>
            </div>
        </div>
    );
}

export default UserMessage;
