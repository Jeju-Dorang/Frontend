import Back from "#img/back.svg"

interface Props{
    setOpenOnboarding : (Onboarding : boolean) => void;
}

const Header = ({setOpenOnboarding}:Props) => {
    return (
        <div className="fixed w-[100%] h-[41px] flex flex-row justify-start items-center bg-white">
            <button onClick ={() => setOpenOnboarding(true)}>
                <img src = {Back} alt="뒤로가기" 
                    className='mr-[6px] ml-[15px]' />
            </button>
            <p className='font-bold text-[16px] text-primary-orange'>
                챗봇페이지
            </p>
        </div>

    );
}

export default Header;