import { Fragment } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { Place } from '@type/place';
import PlaceMarkers from '@components/ArroundKakaoMap/PlaceMarkers';
import { StayApiResponse } from '@type/stay';

interface Props {
    places: StayApiResponse[];
    map: kakao.maps.Map | null;
    infoWindow: kakao.maps.InfoWindow | null;
    setInfoWindow: React.Dispatch<
    React.SetStateAction<kakao.maps.InfoWindow | null>
    >;
    myLat: number;
    myLng: number;
}

const PlaceActivity = ({
    places,
    map,
    infoWindow,
    setInfoWindow,
    myLat,
    myLng,
}: Props) => {
    const handleMarkerClick = (place: StayApiResponse) => {
        const markerPosition = new kakao.maps.LatLng(parseFloat(place.mapY), parseFloat(place.mapX));
        if (!map) return;

        const findRoute = () => {
            window.open(
                `https://map.kakao.com/link/to/${place.title},${place.mapY},${place.mapX}/from/현재 위치,${myLat},${myLng}`,
            );
        };

        const newInfoWindow = new kakao.maps.InfoWindow({
            content: `
            <div class="p-1 font-[12px] text-center min-w-[150px]">
                <div>${place.title}</div>
                <button id="routeButton" 
                        class="mt-1 p-1 bg-primary-orange text-white border-none rounded cursor-pointer w-full">
                    길찾기
                </button>
            </div>
            `,
        });

        // 현재 열려 있는 InfoWindow 닫기
        if (infoWindow) {
            infoWindow.close();
            setInfoWindow(null);
        }

        // 새로운 InfoWindow 열기
        if (!infoWindow || infoWindow.getContent() !== newInfoWindow.getContent()) {
            newInfoWindow.open(
                map,
                new kakao.maps.Marker({
                    position: markerPosition,
                }),
            );
            setInfoWindow(newInfoWindow);
            
            const routeButton = document.getElementById('routeButton');
                if (routeButton) {
                    routeButton.addEventListener('click', findRoute);
                }
        } else {
            setInfoWindow(null);
        }
    };

    return (
        <Fragment>
            {places.map((place, index) => (
                <MapMarker
                    key={index}
                    position={{ lat: Number(place.mapY), lng: Number(place.mapX) }}
                    onClick={() => handleMarkerClick(place)}
                />
            ))}
        </Fragment>
    );
};

export default PlaceActivity;