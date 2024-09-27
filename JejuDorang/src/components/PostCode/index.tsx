interface Props {
    onChangeAddress: (val: Location) => void;
}

export const SearchAddressWithLatiLongitude = ({ onChangeAddress }: Props) => {
    const [getXYCoordinates] = useLazyGetXYCoordinatesQuery(); //kakao 위/경도 데이터를 호출하는 쿼리
    
    const handleComplete = (data: Address) => {
        const address = data.address;
        getXYCoordinates(address)
        .then(({ data }) => {
            if (data) {
                onChangeAddress({
                    address,
                    detailAddress: data.documents[0].road_address.building_name,
                    zipCode: data.documents[0].road_address.zone_no,
                    latitude: data.documents[0].y,
                    longitude: data.documents[0].x,
                });
            }
        })
        .catch((err) => alert('카카오 위/경도 데이터를 불러올 수 없습니다.'));
    };
  
    return <PostCode onHandleComplete={handleComplete} />;
  };