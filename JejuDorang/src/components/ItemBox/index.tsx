import { useState, useEffect } from 'react';
import { ITEM_LIST } from '@constants/itemList';
import { DORANG_CATEGORY } from '@constants/category';
import { getDorangItems } from '@apis/main';
import { dorangItem } from '@type/dorangItem';

const buttonStyles = (isActive: boolean) =>
  `w-[64px] h-[31px] text-[15px] leading-[140%] rounded-[50px] border whitespace-nowrap hover:bg-primary-orange ${
    isActive ? 'bg-primary-orange text-white' : 'bg-white text-[#515356]'
  }`;
interface Props {
  setItemImageIndex: (value: number) => void;
  setPetImageIndex: (value: number) => void;
  setBackgroundImageIndex: (value: number) => void;
}

const ItemBox = ({
  setItemImageIndex,
  setPetImageIndex,
  setBackgroundImageIndex,
}: Props) => {
  const [category, setCategory] = useState<string>('아이템');
  const [selectedItems, setSelectedItems] = useState({
    아이템: 0,
    펫: 0,
    배경: 0,
  });
  const [userItems, setUserItems] = useState<dorangItem>({
    backgroundImage: [],
    itemImage: [],
    petImage: [],
  });

  const fetchItems = async () => {
    try {
      const data = await getDorangItems();
      setUserItems({
        backgroundImage: data?.backgroundImage || [],
        itemImage: data?.itemImage || [],
        petImage: data?.petImage || [],
      });
    } catch (error) {
      console.error("Failed to fetch user's items:", error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = ITEM_LIST[category as keyof typeof ITEM_LIST];

  const isItemOwned = (index: number): boolean => {
    switch (category) {
      case '아이템':
        return (
          index === 0 ||
          userItems.itemImage.some((item) => item.index === index)
        );
      case '펫':
        return (
          index === 0 || userItems.petImage.some((item) => item.index === index)
        );
      case '배경':
        return (
          index === 0 ||
          userItems.backgroundImage.some((item) => item.index === index)
        );
      default:
        return false;
    }
  };

  const handleItemClick = (index: number) => {
    if (isItemOwned(index)) {
      setSelectedItems((prev) => ({ ...prev, [category]: index }));
      switch (category) {
        case '아이템':
          setItemImageIndex(index);
          break;
        case '펫':
          setPetImageIndex(index);
          break;
        case '배경':
          setBackgroundImageIndex(index);
          break;
        default:
          break;
      }
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
        {Object.entries(filteredItems).map(([index, item]) => {
          const itemIndex = parseInt(index);
          const isSelected =
            selectedItems[category as keyof typeof selectedItems] === itemIndex;
          const isOwned = isItemOwned(itemIndex);
          return (
            <div
              key={item.url}
              className={`relative flex flex-row items-center w-[64px] h-[60px] border-2 rounded-[16px] justify-center cursor-pointer
                  ${
                    isOwned
                      ? 'hover:bg-primary-orange hover:shadow-md'
                      : 'opacity-50 cursor-not-allowed'
                  }
                  ${isSelected ? 'bg-gray-300' : ''}`}
              onClick={() => isOwned && handleItemClick(itemIndex)}
            >
              {item.url && (
                <img src={item.url} alt="item" className="w-[40px] h-[40px]" />
              )}
              {isSelected && (
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-orange rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemBox;
