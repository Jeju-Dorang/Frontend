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
            <div className='flex justify-center items-center mr-6 ml-6'>
                <div className='flex mt-1 mb-2 w-full h-20 rounded-[10px] gap-[3px] bg-gray-dg'>
                    <img src={img} alt={`${name} 이미지 1`} className='w-1/2 h-full rounded-l-[10px]'/>
                    <img src={img} alt={`${name} 이미지 2`} className='w-1/2 h-full rounded-r-[10px]'/>
                </div>
            </div>
        </button>
        
    );
};

export default StayBox;