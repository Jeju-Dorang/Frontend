import { StayApiResponse } from "@type/stay";
import ActivityKakaoMap from "./ActivityKakaoMap";
import StayBox from "@components/StayBox";
import { Location, LocationApiRequest } from "@type/location";
import { useEffect, useState } from "react";
import { postLocationActivity } from "@apis/locationActivity";

const LocationAcitivity= () => {
    const [activityData, setActivityData] = useState<StayApiResponse[]>([]);
    const [latitude, setLatitude ] = useState<number>(0);
    const [longitude, setLongitude ] = useState<number>(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            handleLocation({ latitude, longitude });
        });
    }, []);


    function handleLocation({ latitude, longitude }:Location) {
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        const location:LocationApiRequest = {

            // 실제 위치
            mapX : longitude.toString(),
            mapY : latitude.toString()
            
            // 제주도 주소 더미 데이터
            // mapX : '126.786877',
            // mapY : '33.345535'
        };
        fetchLocationActivityData(location);
    }

    const fetchLocationActivityData = async (location : LocationApiRequest) => {
        const LocationAcitivityData = await postLocationActivity(location);
        if (LocationAcitivityData) {
            setActivityData(LocationAcitivityData);
        }
    }

    console.log("activity data : ", activityData)

    return(
        <div className="flex ml-6 items-start gap-[8px] flex-col">
            <h1 className = "font-semibold text-[20px] text-black">
                사용자 맞춤 추천
            </h1>
            <h3 className = "font-semibold text-[13px] text-gray-dg">
                내 위치를 기반으로한 맞춤 추천
            </h3> 
            <ActivityKakaoMap 
                lat ={latitude}
                lng={longitude}
                css={'flex'}
                activityData={activityData} 
            />
            <div className='flex flex-col gap-2 justify-center items-center'>
                {activityData.map((data, index) => (
                    <StayBox
                        key={index}
                        name={data.title}
                        location={data.address}
                        img = {data.image}
                    />
                ))}
            </div>
        </div>

    );
}

export default LocationAcitivity;