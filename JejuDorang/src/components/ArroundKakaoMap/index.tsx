import { CategoryCode } from 'CategoryCodes';
import { Fragment, useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MAP_CATEGORY } from '@constants/category';
import { Place, PlacesSearchResultItem } from '@type/place';
import InvalidLocation from '@components/InvalidLocation/index';

interface Props {
  lat: number;
  lng: number;
  css: string;
}

const ArroundKakaoMap = ({ lat, lng, css }: Props) => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [category, setCategory] = useState<CategoryCode>('CS2');
  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
  const [clusterer, setClusterer] = useState<kakao.maps.MarkerClusterer | null>(null);
  const [infoWindow, setInfoWindow] = useState<kakao.maps.InfoWindow | null>(
    null,
  );
  const isInvalidLocation = lat === 0 && lng === 0;

  // 클러스터러 초기화
  useEffect(() => {
    if (!map) return;

    const newClusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 5,
      calculator: [10, 30, 50],
      texts: (size: number) => {
        return size.toString();
      },
      styles: [
        {
          width: '40px',
          height: '40px',
          background: 'rgba(255, 165, 0, 0.8)',
          borderRadius: '50%',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: '40px',
        },
        {
          width: '50px',
          height: '50px',
          background: 'rgba(255, 140, 0, 0.8)',
          borderRadius: '50%',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: '50px',
        },
        {
          width: '60px',
          height: '60px',
          background: 'rgba(255, 100, 0, 0.8)',
          borderRadius: '50%',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: '60px',
        },
      ],
    });

    setClusterer(newClusterer);

    return () => {
      if (newClusterer) {
        newClusterer.clear();
      }
    };
  }, [map]);

  // 마커 클릭 핸들러
  const handleMarkerClick = (place: Place, marker: kakao.maps.Marker) => {
    if (!map) return;

    const findRoute = () => {
      window.open(
        `https://map.kakao.com/link/to/${place.place_name},${place.y},${place.x}/from/내 숙소,${lat},${lng}`,
      );
    };

    const newInfoWindow = new kakao.maps.InfoWindow({
      content: `
        <div style="padding:5px;font-size:12px;text-align:center;min-width:150px;">
          <div>${place.place_name}</div>
          <button id="routeButton" style="margin-top:5px;padding:2px 5px;background-color:#FFA500;color:white;border:none;border-radius:3px;cursor:pointer;width:100%;">
            길찾기
          </button>
        </div>
      `,
    });

    if (infoWindow) {
      infoWindow.close();
    }

    newInfoWindow.open(map, marker);
    setInfoWindow(newInfoWindow);

    setTimeout(() => {
      const routeButton = document.getElementById('routeButton');
      if (routeButton) {
        routeButton.addEventListener('click', findRoute);
      }
    }, 100);
  };

  useEffect(() => {
    if (!map || !clusterer) return;

    // 기존 마커 제거
    clusterer.clear();
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
    if (infoWindow) {
      infoWindow.close();
      setInfoWindow(null);
    }

    const ps = new kakao.maps.services.Places();
    const placesSearchCB = (
      result: PlacesSearchResultItem[],
      status: kakao.maps.services.Status,
    ) => {
      if (status === kakao.maps.services.Status.OK) {
        const formattedPlaces: Place[] = result.map((item) => ({
          id: item.id,
          place_name: item.place_name,
          y: Number(item.y),
          x: Number(item.x),
        }));

        // 클러스터링을 위한 마커 생성
        const newMarkers = formattedPlaces.map((place) => {
          const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(place.y, place.x),
          });

          // 마커 클릭 이벤트 추가
          kakao.maps.event.addListener(marker, 'click', () => {
            handleMarkerClick(place, marker);
          });

          return marker;
        });

        setMarkers(newMarkers);
        // 클러스터러에 마커 추가
        clusterer.addMarkers(newMarkers);
      } else {
        console.error('장소 검색 실패:', status);
      }
    };

    ps.categorySearch(category, placesSearchCB, {
      useMapBounds: true,
      location: new kakao.maps.LatLng(lat, lng),
    });
  }, [lat, lng, category, map, clusterer]);

  const handleCategoryChange = (buttonId: CategoryCode) => {
    setCategory(buttonId);
    if (infoWindow) {
      infoWindow.close();
      setInfoWindow(null);
    }
  };

  const renderButtons = () => {
    return (
      <div className="flex flex-nowrap mb-[15px]">
        {MAP_CATEGORY.map((button) => (
          <button
            key={button.id}
            onClick={() => handleCategoryChange(button.id as CategoryCode)}
            className={`rounded-[15px] w-[74px] h-[24px] mx-2 text-[10px] shadow-[0_1px_6px_0px_rgba(0,0,0,0.3)] hover:text-gray-lg ${
              category === button.id ? 'text-primary-orange' : 'text-gray-dg'
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={`${css}`}>
      {isInvalidLocation ? (
        <InvalidLocation />
      ) : (
        <Fragment>
          {renderButtons()}
          <Map
            center={{ lat, lng }}
            style={{ width: '100%', height: '460px' }}
            onCreate={setMap}
          >
            <MapMarker
              position={{ lat, lng }}
              image={{
                src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png',
                size: { width: 50, height: 50 },
                options: { offset: { x: 25, y: 50 } },
              }}
            />
          </Map>
        </Fragment>
      )}
    </div>
  );
};

export default ArroundKakaoMap;
