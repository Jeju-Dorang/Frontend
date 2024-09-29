import { Map, MapMarker } from 'react-kakao-maps-sdk';
import DorangProfile from '#img/dorangProfile.webp'
import PlaceActivity from './PlaceActivity';
import { useEffect, useState } from 'react';
import { Place, PlacesSearchResultItem } from '@type/place';
import { CategoryCode } from 'CategoryCodes';
import { StayApiResponse } from '@type/stay';
import { log } from 'console';

interface Props {
    lat: number;
    lng: number;
    css: string;
    activityData : StayApiResponse[];
}


const ActivityKakaoMap = ({ lat, lng, css, activityData }: Props) => {
    const [places, setPlaces] = useState<Place[]>([]);
    const [map, setMap] = useState<kakao.maps.Map | null>(null);
    const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
    const [infoWindow, setInfoWindow] = useState<kakao.maps.InfoWindow | null>(null,);

    return (
        <div className={`${css}`}>
            <Map 
                center={{ lat, lng }}
                style={{ width: '100%', height: '185px' }} 
                onCreate={setMap}
            >
                <MapMarker 
                position={{ lat, lng }}
                image={{
                src: DorangProfile,
                size: {
                    width: 50,
                    height: 50
                }}}/>
                
                <PlaceActivity
                    places={activityData}
                    map={map}
                    infoWindow={infoWindow}
                    setInfoWindow={setInfoWindow}
                    myLat={lat}
                    myLng={lng}
                />
            </Map>
        </div>
    );
    };

export default ActivityKakaoMap;
