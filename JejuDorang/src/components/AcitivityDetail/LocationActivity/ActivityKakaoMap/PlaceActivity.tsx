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
    }

    const PlaceActivity = ({ places, map, infoWindow, setInfoWindow }: Props) => {
    const handleMarkerClick = (place: Place) => {
        const markerPosition = new kakao.maps.LatLng(place.y, place.x);

        if (!map) return;

        const newInfoWindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
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

export default PlaceActivity;