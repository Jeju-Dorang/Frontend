import { getStays } from '@apis/stay';
import { Stays } from '@type/Stays';
import { useState, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import StayInfoCard from '@components/StayCard';
import Spinner from '@components/Spinner';
import StayModal from '@components/StayModal';

const RecommendStay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { direction, type, price } = location.state || {};

  const [stayData, setStayData] = useState<Stays[] | null>(null);
  const [selectedStayId, setSelectedStayId] = useState<number | null>(null);

  useEffect(() => {
    const fetchStayData = async () => {
      const data = await getStays(direction, type, price);
      if (data === null) {
        navigate('/stay');
      }
      if (data?.length === 0) {
        alert('추천 숙소가 없습니다.');
        navigate('/stay');
      }
      setStayData(data);
    };
    fetchStayData();
    if (!direction || !type || !price) {
      navigate('/stay');
    }
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

  const convertType = (type: string) => {
    const typeMap: { [key: string]: string } = {
      hotel: '호텔',
      lodge: '민박',
      pension: '펜션',
      guestHouse: '게스트 하우스',
    };
    return typeMap[type] || '';
  };

  const handleStayClick = (lodgingId: number) => {
    setSelectedStayId(lodgingId);
  };

  const handleCloseModal = () => {
    setSelectedStayId(null);
  };

  if (stayData === null) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner size={48} color="#F1C4A3" />
        <p className="mt-4 text-lg font-semibold">데이터 불러오는 중...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="h-[458px] mb-4">
        <Map
          center={{
            lat: Number(stayData?.[0].latitude),
            lng: Number(stayData?.[0].longitude),
          }}
          className="w-full h-full"
          level={3}
        >
          {stayData?.map((stay, index) => (
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
        {stayData?.map((stay) => (
          <StayInfoCard
            key={stay.lodgingId}
            stay={stay}
            onClick={() => handleStayClick(stay.lodgingId)}
          />
        ))}
      </div>
      {selectedStayId && (
        <StayModal lodgingId={selectedStayId} onClose={handleCloseModal} />
      )}
    </Fragment>
  );
};

export default RecommendStay;
