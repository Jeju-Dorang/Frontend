import { getStays } from '@apis/stay';
import { Stays } from '@type/Stays';
import { useState, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import StayInfoCard from '@components/StayCard';

const RecommendStay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { direction, type, price } = location.state || {};

  const [stayData, setStayData] = useState<Stays[] | null>(null);

  useEffect(() => {
    const fetchStayData = async () => {
      // const data = await getStays(direction, type, price);
      // setStayData(data);

      setStayData([
        {
          name: '카세로지',
          image: 'url1',
          address: '제주특별자치도 서귀포시 표선면 가시로 383',
          distance: '530m',
          lodgingId: 1,
          rating: 4.5,
          latitude: '33.55635',
          longitude: '126.795841',
        },
        {
          name: '카세로지2',
          image: 'url1',
          address: '제주특별자치도 서귀포시 표선면 가시로 383',
          distance: '530m',
          lodgingId: 2,
          rating: 4.0,
          latitude: '33.55635',
          longitude: '126.7958',
        },
        {
          name: '카세로지3',
          image: 'url1',
          address: '제주특별자치도 서귀포시 표선면 가시로 383',
          distance: '530m',
          lodgingId: 3,
          rating: 4.3,
          latitude: '33.55635',
          longitude: '126.795',
        },
      ]);
    };
    fetchStayData();
  }, [direction, type, price]);

  const convertDirection = (dir: string) => {
    const directionMap: { [key: string]: string } = {
      east: '동쪽',
      west: '서쪽',
      north: '북쪽',
      south: '남쪽',
    };
    return directionMap[dir] || '';
  };

  const convertType = (t: string) => {
    const typeMap: { [key: string]: string } = {
      hotel: '호텔',
      lodge: '민박',
      pension: '펜션',
      guestHouse: '게스트 하우스',
    };
    return typeMap[t] || '';
  };

  if (!stayData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <Fragment>
      <div className="h-[458px] mb-4">
        <Map
          center={{
            lat: Number(stayData[0].latitude),
            lng: Number(stayData[0].longitude),
          }}
          className="w-full h-full"
          level={3}
        >
          {stayData.map((stay, index) => (
            <MapMarker
              key={index}
              position={{
                lat: Number(stay.latitude),
                lng: Number(stay.longitude),
              }}
            >
              <div className="p-1 text-black">{stay.name}</div>
            </MapMarker>
          ))}
        </Map>
      </div>
      <div className="flex flex-col gap-[7px] bg-[#A4D6EB]">
        <div className="flex items-center mt-[10px] ml-[14px] gap-[10px]">
          <h1 className="text-2xl font-bold">추천 숙소</h1>
          <span className="flex justify-center items-center font-bold rounded-[15px] w-[74px] h-[24px] text-[10px] shadow-[0_1px_6px_0px_rgba(0,0,0,0.3)] hover:text-gray-dg hover:border-gray-dg cursor-pointer">
            #{convertDirection(direction)}
          </span>
          <span className="flex justify-center items-center font-bold rounded-[15px] w-[74px] h-[24px] text-[10px] shadow-[0_1px_6px_0px_rgba(0,0,0,0.3)] hover:text-gray-dg hover:border-gray-dg cursor-pointer">
            #{convertType(type)}
          </span>
        </div>
        {stayData.map((stay, index) => (
          <StayInfoCard key={index} stay={stay} />
        ))}
      </div>
    </Fragment>
  );
};

export default RecommendStay;
