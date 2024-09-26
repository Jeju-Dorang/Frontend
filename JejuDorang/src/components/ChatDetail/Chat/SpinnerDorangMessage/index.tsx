import DorangProfile from '#img/dorangProfile.webp'

const SpinnerDorangMessage = () => {
    return (
        <div className="flex flex-row">
            <img src = {DorangProfile} alt = "도랑이 프로필"
                className='flex ml-[27px] w-[60px] h-[60px]' />
            <div className="mt-[10px] ml-[9px] px-[12px] py-[8px] max-w-[242px]
                            border border-gray-dg rounded-[17px] bg-white">
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900">
                        <p>답변을 생성중입니다..</p>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default SpinnerDorangMessage;