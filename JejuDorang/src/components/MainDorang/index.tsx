import { useState, useEffect } from 'react';
import { useAuthStore } from '@states/useAuthStore';
import Setting from './Setting/index';
import Character from './Character/index';
import DorangChat from './DorangChat/index';
import LinkToDorang from './LinkToDorang/index';
import CompleteAchievement from './Achievement/index';

const MainDorang = () => {
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
      setBackgroundImageUrl(imageUrl.backGroundImage);
    }
  }, []);
  return (
    <div className="flex flex-col h-screen">
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
