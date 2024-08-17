import DorangProfile from '#img/dorangProfile.webp'

const ChatHeader = () => {
    return (
        <div className="w-[100%] h-[187px] flex flex-col justify-center items-center">
            <img src = {DorangProfile} alt="도랑이 프로필" 
                className='flex mt-[35px] w-[84px] h-[84px]' />
            <p className='mt-[13px] font-bold text-[14px] text-gray-dg'>
                도랑이와 대화해보세요
            </p>
            <p className='mt-[4px] font-bold text-[13px] text-gray-dg'>
            도랑이가 취향에 맞는 여행지를 추천해줍니다
            </p>
        </div>

    );
}

export default ChatHeader;