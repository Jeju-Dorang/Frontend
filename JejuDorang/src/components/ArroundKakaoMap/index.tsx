import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Props {
  lat: number;
  lng: number;
  category: string;
  css: string;
}

const ArroundKakaoMap = ({ lat, lng, category, css }: Props) => {
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;

    // console.log(map);
    const ps = new kakao.maps.services.Places();
    const placesSearchCB = (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);
        setPlaces(data);
      } else {
        console.error('장소 검색 실패:', status);
      }
    };

    // 카테고리를 기반으로 장소 검색
    ps.categorySearch(category, placesSearchCB, {
      useMapBounds: true,
      location: new kakao.maps.LatLng(lat, lng),
    });
  }, [map]);

  return (
    <div className={`${css}`}>
      <Map
        center={{ lat, lng }}
        style={{ width: '100%', height: '460px' }}
        onCreate={setMap} // Map 객체를 상태에 저장
      >
        {places.map((place) => (
          <MapMarker
            key={place.id}
            position={{ lat: Number(place.y), lng: Number(place.x) }}
            onClick={() => {
              const infoWindow = new kakao.maps.InfoWindow({
                content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
              });
              // map 상태를 사용하여 인포 윈도우를 엽니다
              infoWindow.open(
                map,
                new kakao.maps.Marker({
                  position: new kakao.maps.LatLng(place.y, place.x),
                }),
              );
            }}
          />
        ))}
      </Map>
    </div>
  );
};

export default ArroundKakaoMap;
