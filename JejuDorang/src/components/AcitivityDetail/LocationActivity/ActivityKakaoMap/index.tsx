import { Map, MapMarker } from 'react-kakao-maps-sdk';
import DorangProfile from '#img/dorangProfile.webp'
import PlaceActivity from './PlaceActivity';
import { useEffect, useState } from 'react';
import { Place, PlacesSearchResultItem } from '@type/place';
import { CategoryCode } from 'CategoryCodes';
import { StayApiResponse } from '@type/stay';

interface Props {
    lat: number;
    lng: number;
    css: string;
    activityData : StayApiResponse[];
}


const ActivityKakaoMap = ({ lat, lng, css, activityData }: Props) => {
    const category:CategoryCode = 'AT4';
    const [places, setPlaces] = useState<Place[]>([]);
    const [map, setMap] = useState<kakao.maps.Map | null>(null);
    const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
    const [infoWindow, setInfoWindow] = useState<kakao.maps.InfoWindow | null>(null,);

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

    return (
        <div className={`${css}`}>
            <Map 
                center={{ lat, lng }}
                style={{ width: '315px', height: '185px' }} 
                onCreate={setMap}
            >
                <MapMarker 
                position={{ lat, lng }}
                image={{
                src: DorangProfile,
                size: {
                    width: 70,
                    height: 70
                }}}/>

                {activityData.map((activity, index) => (
                    <MapMarker
                    key={index}
                    position={{
                        lat: Number(activity.mapY),
                        lng: Number(activity.mapX),
                    }}>
                        <div className="p-1 text-black">{activity.title}</div>
                    </MapMarker>
                ))}
                
                <PlaceActivity
                places={places}
                map={map}
                infoWindow={infoWindow}
                setInfoWindow={setInfoWindow}
                />
            </Map>
        </div>
    );
    };

export default ActivityKakaoMap;
