import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@states/useAuthStore';
import Character from '@components/MainDorang/Character/index';
import DorangChat from '@components/MainDorang/DorangChat/index';
import ItemBox from '@components/ItemBox/index';

const SettingDorang = () => {
  const [itemImageUrl, setItemImageUrl] = useState<string | null>(null);
  const [petImageUrl, setPetImageUrl] = useState<string | null>(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const imageUrl = useAuthStore.getState().characterImage;
    if (imageUrl !== null) {
      setItemImageUrl(imageUrl.itemImage);
      setPetImageUrl(imageUrl.petImage);
      setBackgroundImageUrl(imageUrl?.backGroundImage);
    }
  }, []);

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
          backgroundColor: backgroundImageUrl ? 'transparent' : '#f1c4a380',
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
        <button className="w-[60px] h-[20px] mt-[9px] mr-[20px] border rounded-[3px] text-[10px] font-[700] bg-primary-orange hover:text-white hover:shadow-md">
          저장
        </button>
      </div>
    </div>
  );
};

export default SettingDorang;
