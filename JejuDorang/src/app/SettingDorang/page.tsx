import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@states/useAuthStore';
import { postDorangItems } from '@apis/main';
import { dorangEquipItem } from '@type/dorangItem';
import { ITEM_LIST } from '@constants/itemList';
import Character from '@components/MainDorang/Character/index';
import DorangChat from '@components/MainDorang/DorangChat/index';
import ItemBox from '@components/ItemBox/index';

const SettingDorang = () => {
  const [itemImageUrl, setItemImageUrl] = useState<string>('');
  const [petImageUrl, setPetImageUrl] = useState<string>('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>('');
  const [itemImageIndex, setItemImageIndex] = useState<number>(0);
  const [petImageIndex, setPetImageIndex] = useState<number>(0);
  const [backgroundImageIndex, setBackgroundImageIndex] = useState<number>(0);
  const [showSaveModal, setShowSaveModal] = useState(false);

  useEffect(() => {
    const imageUrl = useAuthStore.getState().characterImage;
    if (imageUrl !== null) {
      setItemImageIndex(imageUrl.itemImage);
      setPetImageIndex(imageUrl.petImage);
      setBackgroundImageIndex(imageUrl.backgroundImage);
    }
  }, []);

  useEffect(() => {
    setItemImageUrl(ITEM_LIST.아이템[itemImageIndex]?.url || '');
    setPetImageUrl(ITEM_LIST.펫[petImageIndex]?.url || '');
    setBackgroundImageUrl(ITEM_LIST.배경[backgroundImageIndex]?.url || '');
  }, [itemImageIndex, petImageIndex, backgroundImageIndex]);

  const postImageUrl = async () => {
    try {
      const dorangEquipItem: dorangEquipItem = {
        backgroundItem: backgroundImageIndex,
        stuffItem: itemImageIndex,
        petItem: petImageIndex,
      };
      await postDorangItems(dorangEquipItem);
      setShowSaveModal(true);
      setTimeout(() => {
        setShowSaveModal(false);
      }, 1500);
    } catch (error) {
      console.error('Failed to save Dorang items:', error);
      alert('저장에 실패했습니다.');
    }
  };

  return (
    <div className="w-full px-[30px] pt-[25px] relative">
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
        setItemImageIndex={setItemImageIndex}
        setPetImageIndex={setPetImageIndex}
        setBackgroundImageIndex={setBackgroundImageIndex}
      />
      <div className="flex justify-end">
        <button
          onClick={postImageUrl}
          className="w-[60px] h-[20px] mt-[9px] mr-[20px] border rounded-[3px] text-[10px] font-[700] bg-primary-orange hover:text-white hover:shadow-md"
        >
          저장
        </button>
      </div>
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60]">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[300px] h-[200px] flex items-center justify-center">
            <p className="font-semibold text-center text-xl">저장되었습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingDorang;
