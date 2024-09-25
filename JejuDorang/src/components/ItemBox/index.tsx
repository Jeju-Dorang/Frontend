import { useState, useEffect } from 'react';
import { ITEM_LIST } from '@constants/itemList';
import { DORANG_CATEGORY } from '@constants/category';

const buttonStyles = (isActive: boolean) =>
  `w-[64px] h-[31px] text-[15px] leading-[140%] rounded-[50px] border whitespace-nowrap hover:bg-primary-orange ${
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
  const [selectedItems, setSelectedItems] = useState({
    아이템: 'default',
    펫: 'default',
    배경: 'default',
  });

  useEffect(() => {
    // 초기 상태 설정
    setItemImageUrl('');
    setPetImageUrl('');
    setBackgroundImageUrl('');
  }, []);

  const filteredItems = ITEM_LIST.filter((item) => item.type === category);

  const handleItemClick = (url: string | null) => {
    const newUrl = url || 'default';
    setSelectedItems((prev) => ({ ...prev, [category]: newUrl }));
    switch (category) {
      case '아이템':
        setItemImageUrl(url || '');
        break;
      case '펫':
        setPetImageUrl(url || '');
        break;
      case '배경':
        setBackgroundImageUrl(url || '');
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
      <div className="flex flex-wrap justify-start gap-[10px] px-[10px]">
        <div
          className={`flex flex-row items-center w-[64px] h-[60px] border-2 rounded-[16px] justify-center cursor-pointer hover:bg-primary-orange hover:shadow-md ${
            selectedItems[category as keyof typeof selectedItems] === 'default'
              ? 'bg-gray-300'
              : ''
          }`}
          onClick={() => handleItemClick(null)}
        ></div>
        {filteredItems.map((item) => (
          <div
            key={item.url}
            className={`relative flex flex-row items-center w-[64px] h-[60px] border-2 rounded-[16px] justify-center cursor-pointer hover:bg-primary-orange hover:shadow-md ${
              selectedItems[category as keyof typeof selectedItems] === item.url
                ? 'bg-gray-300'
                : ''
            }`}
            onClick={() => handleItemClick(item.url)}
          >
            <img src={item.url} alt="item" className="w-[40px] h-[40px]" />
            {selectedItems[category as keyof typeof selectedItems] === item.url}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemBox;
