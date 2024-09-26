import { StayApiResponse } from "@type/stay";
import ActivityKakaoMap from "./ActivityKakaoMap";
import StayBox from "@components/StayBox";
import { Location, LocationApiRequest } from "@type/location";
import { useEffect, useState } from "react";
import { postLocationActivity } from "@apis/locationActivity";

const LocationActivity = () => {
    const [activityData, setActivityData] = useState<StayApiResponse[]>([]);
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // 현재 위치를 가져오는 함수
        const fetchCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                    handleLocation({ latitude, longitude });
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    setIsLoading(false); // 에러 발생 시 로딩 중단
                }
            );
        };

        fetchCurrentLocation();
    }, []); // 컴포넌트가 처음 렌더링될 때만 실행

    const handleLocation = async ({ latitude, longitude }: Location) => {
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        const location: LocationApiRequest = {
            mapX: longitude.toString(),
            mapY: latitude.toString(),
        };

        await fetchLocationActivityData(location);
        setIsLoading(false); // 데이터 가져온 후 로딩 중단
    };

    const fetchLocationActivityData = async (location: LocationApiRequest) => {
        try {
            const locationActivityData = await postLocationActivity(location);
            if (locationActivityData) {
                setActivityData(locationActivityData);
            }
        } catch (error) {
            console.error("Failed to fetch location activity data:", error);
        }
    };

    return (
        <div className="flex ml-6 gap-[8px] flex-col">
                <h1 className="font-semibold text-[20px] text-black">사용자 맞춤 추천</h1>
                <h3 className="font-semibold text-[13px] text-gray-dg">
                    내 위치를 기반으로한 맞춤 추천
                </h3>
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full w-full ml-11 mt-20">
                    <p className="font-medium text-[17px] text-black mb-3">
                        위치정보를 가져오고 있습니다...
                    </p>
                    <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-5 border-primary-orange" />
                </div>
            ) : (
                <>
                    <div className="mb-3">
                        <ActivityKakaoMap
                            lat={latitude}
                            lng={longitude}
                            css={"flex"}
                            activityData={activityData}
                        />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        {activityData.map((data, index) => (
                            <StayBox
                                key={index}
                                name={data.title}
                                location={data.address}
                                img={data.image}
                            />
                        ))}

                        {/* 놀거리가 없을 경우 */}
                        {!activityData &&
                            <div className= "justify-center items-center text-black text-15px">
                                현재 위치에서 정보를 찾을 수 없습니다.
                            </div>
                        }
                    </div>
                </>
            )}
        </div>
    );
};

export default LocationActivity;
