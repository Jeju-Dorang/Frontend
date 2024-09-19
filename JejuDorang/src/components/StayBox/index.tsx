import React from 'react';

interface Props {
    name: string;
    distance?: string;
    location: string;
    description?: string;
    img : string;
}

const StayBox = ({name,distance,location,description,img}:Props) => {
    return (
        <button className='flex flex-col w-full h-[171px] rounded-[15px] bg-white shadow'
            style={{
                boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.25)',
            }}>
            <h1 className = "flex mt-4 ml-6 text-black text-[15px] font-bold">
                {name}
            </h1>
            <div className='flex flex-row mt-1 ml-6'>
                <h2 className = "text-gray-dg text-[10px] font-medium">
                    {distance}
                </h2>
                <h2 className = "ml-2 text-primary-blue text-[10px] font-semibold">
                    {location}
                </h2>
            </div>
            <h2 className = "flex mt-1 ml-6 text-black text-[10px] font-semibold">
                {description}
            </h2>
            <div className='mt-1 mb-2 ml-[25px] w-[260px] mr-[25px] h-[77px] rounded-[10px] gap-[3px] flex bg-gray-dg'>
                <img src={img} alt="숙소1" className='w-1/2 h-full'/>
                <img src={img} alt="숙소2" className='w-1/2 h-full'/>
            </div>
        </button>
        
    );
};

export default StayBox;