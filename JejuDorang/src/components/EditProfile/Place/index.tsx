import { useNavigate } from 'react-router-dom';
import locationMark from '#img/myPage/locationMark.webp';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Cancel from '#img/myPage/cancel.svg';
import { Address } from 'cluster';
import { getLocalAddress } from '@apis/kakaoLocalApi';
import { StayLocation } from '@type/location';
import { postLodgingData } from '@apis/editMypage';
import SelectModal from './SelectModal';

interface Props {
    place?:string;
}

const Place = ({place}:Props) => {
    const navigate = useNavigate();
    const [change, setChange] = useState<boolean>(false);
    const [isOpenPost, setIsOpenPost] = useState<boolean>(false);
    const [addressCode, setAddressCode] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);
    const [lodgingName, setLodgingName] = useState<string>(place||'');
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    };
    
    const onCompletePost = (data:any) => {
        let fullAddr = data.address;
        let extraAddr = '';
    
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
        }
    
        setAddressCode(data.zonecode); // 우편번호 설정
        setAddress(fullAddr); //검색한 주소
        setIsOpenPost(false);
        console.log("data : ", data);
        onFetchLatitudelongitude();
    
    };

    const onFetchLatitudelongitude = async () => {
        try {
            const response = await getLocalAddress(address);
            if (response && response.data) {
                const road_address = response.data.documents[0].road_address;
    
                setLongitude(road_address.x);
                setLatitude(road_address.y);
                setLodgingName(road_address.building_name);

    
                // 상태 업데이트 후 sendLodgingData 호출
                const isSuccess = await sendLodgingData(road_address.x, road_address.y, road_address.building_name);
                if (isSuccess) {
                    console.log("숙소 데이터가 성공적으로 전송되었습니다.");
                } else {
                    console.error("숙소 데이터 전송에 실패했습니다.");
                }
            } else {
                alert('다른 숙소 위치를 선택해주세요.');
            }
        } catch (error) {
            console.error("주소 정보를 가져오는 중 오류 발생:", error);
            alert('주소 정보를 가져오는 데 실패했습니다.');
        }

        setIsPopupOpen(!isOpenPost);
    };

    
    const sendLodgingData = async (longitude:number, latitude:number, lodgingName:string) => {
        const request: StayLocation = {
            longitude: longitude,
            latitude: latitude,
            lodgingName: lodgingName
        };
    
        try {
            const response = await postLodgingData(request);
            if (response) {
                return true; // 전송 성공
            }
        } catch (error) {
            console.error('숙소 데이터 전송 중 오류 발생:', error);
        }
    
        return false; // 전송 실패
    };


    return (
        <>
            {isPopupOpen && 
                <SelectModal 
                    onChangeOpenPost = {onChangeOpenPost}
                    setIsPopupOpen = {setIsPopupOpen}
                />
            }

            <div className="flex flex-col ml-7 mr-7 mb-4 mt-6">
                <h3 className="text-black font-semibold text-[16px]">
                    플레이스
                </h3>
                <h3 className="text-gray-dg font-semibold text-[14px]">
                    내 숙소 위치를 변경할 수 있습니다.
                </h3>
                <div className = "flex flex-row items-center mt-3 justify-between gap-20">
                    <div className='flex flex-row gap-1'>
                        {lodgingName?
                            <>
                                <h2 className='mt-1 font-semibold text-[#7E7E7E] text-[16px]'>
                                    {lodgingName}
                                </h2>
                                <button onClick={() => setIsPopupOpen(!isPopupOpen)}
                                        className='mt-1 font-semibold text-gray-dg text-[16px] 
                                                    cursor-pointer hover:text-[#73BCE5]'
                                >
                                    변경
                                </button>
                            </>
                            :<button onClick = {() => setIsPopupOpen(!isPopupOpen)}
                                    className='mt-1 font-semibold text-[#7E7E7E] text-[16px]
                                                hover:text-primary-blue'>
                                숙소를 등록해주세요
                            </button>

                        }

                    </div>
                    {isOpenPost &&
                    <div className='fixed flex inset-0 bg-black bg-opacity-50 items-center justify-center z-50'
                        onClick={() => setIsOpenPost(!isOpenPost)}>
                        <DaumPostcode 
                            className="w-full h-8 mr-20 ml-20"
                            autoClose 
                            onComplete={onCompletePost}
                            animation ={true}
                            />
                    </div>
                    }
                    <div className='flex flex-row gap-1 items-center'>
                        <img src = {locationMark} alt ="숙소 위치마크" className='w-[15px] h-[15px]'/>
                        <p className='font-semibold text-[15px] text-[#73BCE5]'>내 위치</p>
                    </div>
                </div>
            </div>
            <hr />
        </>

    );
}

export default Place;