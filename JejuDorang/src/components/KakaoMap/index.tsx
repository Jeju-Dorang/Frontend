import { Map, MapMarker } from 'react-kakao-maps-sdk';
import InvalidLocation from '@components/InvalidLocation';

interface Props {
  lat: number;
  lng: number;
  css: string;
}

const KakaoMap = ({ lat, lng, css }: Props) => {
  const isInvalidLocation = lat === 0 && lng === 0;

  return (
    <div className={`${css}`}>
      {isInvalidLocation ? (
        <InvalidLocation />
      ) : (
        <Map center={{ lat, lng }} style={{ width: '100%', height: '460px' }}>
          <MapMarker position={{ lat, lng }}></MapMarker>
        </Map>
      )}
    </div>
  );
};

export default KakaoMap;
