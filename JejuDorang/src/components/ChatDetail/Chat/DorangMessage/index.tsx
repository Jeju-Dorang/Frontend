import DorangProfile from '#img/dorangProfile.webp'

interface Props {
    message : string
}

const DorangMessage = ({message}:Props) => {
    return (
        <div className="flex flex-row">
            <img src = {DorangProfile} alt = "도랑이 프로필"
                className='flex ml-[27px] w-[56px] h-[56px]' />
            <div className="mt-[6px] ml-[9px] px-[12px] py-[8px] max-w-[242px]
                            border border-gray-dg rounded-[17px] bg-white">
                <p className="font-semibold text-[10px] text-black whitespace-pre-wrap">
                    {message}
                </p>
            </div>
        </div>

    );

}

export default DorangMessage;