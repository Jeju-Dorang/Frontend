import { Fragment } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { Place } from '@type/place';

interface Props {
  places: Place[];
  map: kakao.maps.Map | null;
  infoWindow: kakao.maps.InfoWindow | null;
  setInfoWindow: React.Dispatch<
    React.SetStateAction<kakao.maps.InfoWindow | null>
  >;
  myLat: number;
  myLng: number;
}

const PlaceMarkers = ({
  places,
  map,
  infoWindow,
  setInfoWindow,
  myLat,
  myLng,
}: Props) => {
  const handleMarkerClick = (place: Place) => {
    const markerPosition = new kakao.maps.LatLng(place.y, place.x);

    if (!map) return;

    const findRoute = () => {
      window.open(
        `https://map.kakao.com/link/to/${place.place_name},${place.y},${place.x}/from/내 숙소,${myLat},${myLng}`,
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
      setInfoWindow(null);
    }

    if (!infoWindow || infoWindow.getContent() !== newInfoWindow.getContent()) {
      newInfoWindow.open(
        map,
        new kakao.maps.Marker({
          position: markerPosition,
        }),
      );
      setInfoWindow(newInfoWindow);

      setTimeout(() => {
        const routeButton = document.getElementById('routeButton');
        if (routeButton) {
          routeButton.addEventListener('click', findRoute);
        }
      }, 100);
    } else {
      setInfoWindow(null);
    }
  };

  return (
    <Fragment>
      {places.map((place) => (
        <MapMarker
          key={place.id}
          position={{ lat: Number(place.y), lng: Number(place.x) }}
          onClick={() => handleMarkerClick(place)}
        />
      ))}
    </Fragment>
  );
};

export default PlaceMarkers;
