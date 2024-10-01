import { useState, useEffect } from 'react';
import { useAuthStore } from '@states/useAuthStore';
import Setting from './Setting/index';
import Character from './Character/index';
import DorangChat from './DorangChat/index';
import LinkToDorang from './LinkToDorang/index';
import CompleteAchievement from './Achievement/index';
import { ITEM_LIST } from '@constants/itemList';

const MainDorang = () => {
  const [itemImageUrl, setItemImageUrl] = useState<string>('');
  const [petImageUrl, setPetImageUrl] = useState<string>('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>('');

  useEffect(() => {
    const characterImage = useAuthStore.getState().characterImage;
    if (characterImage !== null) {
      setItemImageUrl(ITEM_LIST.아이템[characterImage.itemImage]?.url || '');
      setPetImageUrl(ITEM_LIST.펫[characterImage.petImage]?.url || '');
      setBackgroundImageUrl(
        ITEM_LIST.배경[characterImage.backgroundImage]?.url || '',
      );
    }
  }, []);

  return (
    <div className="flex flex-col h-[479px]">
      <div
        className="flex flex-col justify-start items-center h-[333px] rounded-[16px] bg-background mt-[11px]"
        style={{
          backgroundImage: backgroundImageUrl
            ? `url(${backgroundImageUrl})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Setting />
        <Character itemImageUrl={itemImageUrl} petImageUrl={petImageUrl} />
        <DorangChat />
      </div>
      <LinkToDorang />
      <CompleteAchievement />
    </div>
  );
};

export default MainDorang;
