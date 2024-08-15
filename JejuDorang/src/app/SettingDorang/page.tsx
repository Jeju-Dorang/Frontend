import { Link } from 'react-router-dom';
import { useState } from 'react';
import Character from '@components/MainDorang/Character';
import DorangChat from '@components/MainDorang/DorangChat';
import ItemBox from '@components/ItemBox/index';
//테스트용 이미지
import alpaca from '#img/dorang/pet/alpaca.webp';
import camera from '#img/dorang/item/camera.webp';
import forest from '#img/dorang/item/forest.webp';

const SettingDorang = () => {
  const [itemImageUrl, setItemImageUrl] = useState<string>(camera);
  const [petImageUrl, setPetImageUrl] = useState<string>(alpaca);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>(forest);

  // useEffect(() => {
  //   //api로 사용자의 도랑이 이미지를 받아서 저장
  //  // const imageUrl = res.data.imageUrl;
  //  // setImageUrl(imageUrl);
  // }, []);

  // const postImageUrl = async () => {
  // 저장 버튼 누를 시 선택한 이미지 저장
  // });

  return (
    <div className="w-full px-[30px] pt-[25px]">
      <Link to={'/'} className="text-[16px] text-primary-orange pb-[15px]">
        &lt; 도랑이 설정
      </Link>
      <div
        className="flex flex-col justify-center items-center h-[333px] rounded-[16px] mt-[11px] mb-[19px]"
        style={{
          backgroundImage: backgroundImageUrl
            ? `url(${backgroundImageUrl})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Character itemImageUrl={itemImageUrl} petImageUrl={petImageUrl} />
        <DorangChat />
      </div>
      <ItemBox
        setItemImageUrl={setItemImageUrl}
        setPetImageUrl={setPetImageUrl}
        setBackgroundImageUrl={setBackgroundImageUrl}
      />
      <div className="flex justify-end">
        <button className="w-[60px] h-[20px] mt-[9px] mr-[20px] border rounded-[3px] text-[10px] font-[700] bg-primary-orange">
          저장
        </button>
      </div>
    </div>
  );
};

export default SettingDorang;
