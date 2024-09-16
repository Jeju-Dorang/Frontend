import { useNavigate } from 'react-router-dom';
import locationMark from '#img/myPage/locationMark.webp';

interface Props {
    place?:string;
}

const Place = ({place}:Props) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col ml-7 mr-7 mb-4 mt-6">
                <h3 className="text-black font-semibold text-[16px]">
                    플레이스
                </h3>
                <h3 className="text-gray-dg font-semibold text-[14px]">
                    내 숙소 위치를 변경할 수 있습니다.
                </h3>
                <div className = "flex flex-row items-center mt-3 justify-between gap-20">
                    <div className='flex flex-row gap-1'>
                        <h2 className='mt-1 font-semibold text-[#7E7E7E] text-[16px]'>
                            {place}
                        </h2>
                        <button onClick={() => navigate('/stay')}
                                className='mt-1 font-semibold text-gray-dg text-[16px] 
                                            cursor-pointer hover:text-[#73BCE5]'
                        >
                            변경
                        </button>

                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <img src = {locationMark} alt ="숙소 위치마크" className='w-[15px] h-[15px]'/>
                        <p className='font-semibold text-[15px] text-[#73BCE5]'>내 위치</p>
                    </div>
                </div>
            </div>
            <hr />
        </>

    );
}

export default Place;