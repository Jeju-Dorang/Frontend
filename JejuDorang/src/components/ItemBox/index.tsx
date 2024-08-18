import { useState } from 'react';
import { ITEM_LIST } from '@constants/itemList';
import { DORANG_CATEGORY } from '@constants/category';

const buttonStyles = (isActive: boolean) =>
  `w-[64px] h-[31px] text-[15px] leading-[140%] rounded-[50px] border whitespace-nowrap ${
    isActive ? 'bg-primary-orange text-white' : 'bg-white text-[#515356]'
  }`;

interface Props {
  setItemImageUrl: (value: string) => void;
  setPetImageUrl: (value: string) => void;
  setBackgroundImageUrl: (value: string) => void;
}

const ItemBox = ({
  setItemImageUrl,
  setPetImageUrl,
  setBackgroundImageUrl,
}: Props) => {
  const [category, setCategory] = useState<string>('아이템');

  const filteredItems = ITEM_LIST.filter((item) => item.type === category);

  const handleItemClick = (url: string) => {
    switch (category) {
      case '아이템':
        setItemImageUrl(url);
        break;
      case '펫':
        setPetImageUrl(url);
        break;
      case '배경':
        setBackgroundImageUrl(url);
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-[210px] border-2 rounded-[16px]">
      <div className="flex flex-row pt-[12px] pl-[16px] gap-[10px] mb-[19px]">
        {DORANG_CATEGORY.map((categoryItem) => (
          <button
            className={buttonStyles(category === categoryItem.name)}
            key={categoryItem.id}
            onClick={() => setCategory(categoryItem.name)}
          >
            {categoryItem.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-[10px] ml-[10px]">
        {filteredItems.map((item) => (
          <div
            key={item.url}
            className="flex flex-row items-center w-[64px] h-[60px] border-2 rounded-[16px] justify-center cursor-pointer"
            onClick={() => handleItemClick(item.url)}
          >
            <img src={item.url} alt="item" className="w-[40px] h-[40px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemBox;
