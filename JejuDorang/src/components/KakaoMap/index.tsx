import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Props {
  lat: number;
  lng: number;
  css: string;
}

const KakaoMap = ({ lat, lng, css }: Props) => {
  return (
    <div className={`${css}`}>
      <Map center={{ lat, lng }} style={{ width: '100%', height: '460px' }}>
        <MapMarker position={{ lat, lng }}></MapMarker>
      </Map>
    </div>
  );
};

export default KakaoMap;
