import { StayApiResponse } from "@type/stay";
import ActivityKakaoMap from "./ActivityKakaoMap";
import StayBox from "@components/StayBox";
import { Location, LocationApiRequest } from "@type/location";
import { useEffect, useState } from "react";
import { postLocationActivity } from "@apis/locationActivity";

// 임시 더미 데이터 -> api 연결시 삭제
// const ActivityData: StayData[] = [
//     {name: '카세로지', distance: '530m', location: '제주특별자치도 서귀포시 표선면 가시로 383', description:'표선에 위치한 럭셔리 호텔, 레스토랑 및 바/라운지 이용 가능'},
//     {name: '카세로지', distance: '530m', location: '제주특별자치도 서귀포시 표선면 가시로 383', description:'표선에 위치한 럭셔리 호텔, 레스토랑 및 바/라운지 이용 가능'},
//     {name: '카세로지', distance: '530m', location: '제주특별자치도 서귀포시 표선면 가시로 383', description:'표선에 위치한 럭셔리 호텔, 레스토랑 및 바/라운지 이용 가능'},
//     {name: '카세로지', distance: '530m', location: '제주특별자치도 서귀포시 표선면 가시로 383', description:'표선에 위치한 럭셔리 호텔, 레스토랑 및 바/라운지 이용 가능'},
// ];

const LocationAcitivity= () => {
    const [activityData, setActivityData] = useState<StayApiResponse[]>([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            handleLocation({ latitude, longitude });
        });
    }, []);


    function handleLocation({ latitude, longitude }:Location) {
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        const location:LocationApiRequest = {
            mapX : latitude.toString(),
            mapY : longitude.toString()
        };
        fetchLocationActivityData(location);
    }

    const fetchLocationActivityData = async (location : LocationApiRequest) => {
        const LocationAcitivityData = await postLocationActivity(location);
        if (LocationAcitivityData) {
            setActivityData(LocationAcitivityData);
        }
    }

    return(
        <div className="flex ml-6 items-start gap-[8px] flex-col">
            <h1 className = "font-semibold text-[20px] text-black">
                사용자 맞춤 추천
            </h1>
            <h3 className = "font-semibold text-[13px] text-gray-dg">
                내 위치를 기반으로한 맞춤 추천
            </h3> 
            <ActivityKakaoMap lat ={33.473654} lng={126.910741} css={'flex'} />
            <div className='flex flex-col gap-2 justify-center items-center'>
                {activityData.map((data, index) => (
                    <StayBox
                        key={index}
                        name={data.name}
                        location={data.address}
                        img = {data.name}
                    />
                ))}
            </div>
        </div>

    );
}

export default LocationAcitivity;