import { CategoryCode } from 'CategoryCodes';
import { Fragment, useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MAP_CATEGORY } from '@constants/category';
import { Place, PlacesSearchResultItem } from '@type/place';
import PlaceMarkers from '@components/ArroundKakaoMap/PlaceMarkers/index';
import InvalidLocation from '@components/InvalidLocation/index';

interface Props {
  lat: number;
  lng: number;
  css: string;
}

const ArroundKakaoMap = ({ lat, lng, css }: Props) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [category, setCategory] = useState<CategoryCode>('CS2');
  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
  const [infoWindow, setInfoWindow] = useState<kakao.maps.InfoWindow | null>(
    null,
  );
  const isInvalidLocation = lat === 0 && lng === 0;

  useEffect(() => {
    if (!map) return;

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
        setPlaces(formattedPlaces);
        const newMarkers = formattedPlaces.map((place) => {
          const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(place.y, place.x),
            map: map,
          });
          return marker;
        });
        setMarkers(newMarkers);
      } else {
        console.error('장소 검색 실패:', status);
      }
    };

    ps.categorySearch(category, placesSearchCB, {
      useMapBounds: true,
      location: new kakao.maps.LatLng(lat, lng),
    });
  }, [lat, lng, category, map]);

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
            <PlaceMarkers
              places={places}
              map={map}
              infoWindow={infoWindow}
              setInfoWindow={setInfoWindow}
              myLat={lat}
              myLng={lng}
            />
          </Map>
        </Fragment>
      )}
    </div>
  );
};

export default ArroundKakaoMap;
