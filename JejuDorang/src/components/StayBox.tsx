import React from 'react';

const StayBox: React.FC = () => {
    return (
        <div className='relative w-[367px] h-[201px] rounded-[15px] bg-white shadow'
            style={{
                boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.25)',
            }}>
            <span className = "absolute top-[17px] left-[25px] text-black"
            style={{
                fontFamily : 'Pretendard, sans-serif',
                fontSize : '15px',
                fontWeight : '700',
            }}>
                카세로지
            </span>
            <span className = "absolute top-[37px] left-[25px] text-gray-dg"
            style={{
                fontFamily : 'Pretendard, sans-serif',
                fontSize : '10px',
                fontWeight : '500',
            }}>
                530m
            </span>
            <span className = "absolute top-[37px] left-[59px] text-primary-blue"
            style={{
                fontFamily : 'Pretendard, sans-serif',
                fontSize : '10px',
                fontWeight : '600',
            }}>
                제주특별자치도 서귀포시 표선면 가시로 383
            </span>
            <span className = "absolute top-[56px] left-[25px] text-black"
            style={{
                fontFamily : 'Pretendard, sans-serif',
                fontSize : '10px',
                fontWeight : '600',
            }}>
                표선에 위치한 럭셔리 호텔, 레스토랑 및 바/라운지 이용 가능
            </span>
            <div className='absolute bottom-[19px] left-[25px] w-[318px] h-[107px] rounded-[10px] gap-[3px] flex bg-gray-dg'>
                <img src="image-url.jpg" alt="숙소1" className='w-1/2 h-full'/>
                <img src="image-url.jpg" alt="숙소2" className='w-1/2 h-full'/>
            </div>
        </div>
        
    );
};

export default StayBox;