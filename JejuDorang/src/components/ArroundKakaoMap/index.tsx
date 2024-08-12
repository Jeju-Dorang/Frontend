import { CategoryCode } from 'CategoryCodes';
import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Place {
  id: string;
  place_name: string;
  y: number;
  x: number;
}

interface PlacesSearchResultItem {
  id: string;
  place_name: string;
  y: string;
  x: string;
}

interface Props {
  lat: number;
  lng: number;
  category: CategoryCode;
  css: string;
}

const ArroundKakaoMap = ({ lat, lng, category, css }: Props) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [infoWindow, setInfoWindow] = useState<kakao.maps.InfoWindow | null>(
    null,
  );

  useEffect(() => {
    if (!map) return;

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
      } else {
        console.error('장소 검색 실패:', status);
      }
    };

    ps.categorySearch(category, placesSearchCB, {
      useMapBounds: true,
      location: new kakao.maps.LatLng(lat, lng),
    });
  }, [lat, lng, category, map]);

  const handleMarkerClick = (place: Place) => {
    if (infoWindow) {
      infoWindow.close();
      setInfoWindow(null);
    } else {
      const newInfoWindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
      });

      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      if (!map) return;

      newInfoWindow.open(map, marker);
      setInfoWindow(newInfoWindow);
    }
  };

  return (
    <div className={`${css}`}>
      <Map
        center={{ lat, lng }}
        style={{ width: '100%', height: '460px' }}
        onCreate={setMap}
      >
        {places.map((place) => (
          <MapMarker
            key={place.id}
            position={{ lat: Number(place.y), lng: Number(place.x) }}
            onClick={() => handleMarkerClick(place)}
          />
        ))}
      </Map>
    </div>
  );
};

export default ArroundKakaoMap;
