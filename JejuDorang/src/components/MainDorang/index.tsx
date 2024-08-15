import { useState } from 'react';
import Setting from './Setting';
import Character from './Character';
import DorangChat from './DorangChat';
import LinkToDorang from './LinkToDorang';
import Achievement from './Achievement';
//테스트이미지
import alpaca from '#img/dorang/pet/alpaca.webp';
import camera from '#img/dorang/item/camera.webp';
import forest from '#img/dorang/background/forest.webp';

const MainDorang = () => {
  const [itemImageUrl, setItemImageUrl] = useState<string>(camera);
  const [petImageUrl, setPetImageUrl] = useState<string>(alpaca);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>(forest);
  // useEffect(() => {
  //   //api로 사용자의 도랑이 이미지를 받아서 저장
  //  // const imageUrl = res.data.imageUrl;
  //  // setImageUrl(imageUrl);
  // }, []);
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
      <Achievement />
    </div>
  );
};

export default MainDorang;
