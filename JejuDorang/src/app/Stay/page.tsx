import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Location from '@components/Location';
import StayCategory from '@components/StayCategory';
import EstimatePrice from '@components/EstimatePrice';

const Stay = () => {
  const navigate = useNavigate();
  const [selectMap, setSelectMap] = useState<number>(-1);
  const [selectCategory, setSelectCategory] = useState<number>(-1);
  const [price, setPrice] = useState<number>(-1);

  const handleSelectMap = (mapIndex: number) => {
    setSelectMap(mapIndex);
    setSelectCategory(0);
  };

  const handleSelectCategory = (selectIndex: number) => {
    setSelectCategory(selectIndex);
    setPrice(0);
  };

  const convertToDirection = (mapIndex: number): string => {
    const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    return directions[mapIndex] || '';
  };

  const convertToType = (categoryIndex: number): string => {
    const categories = ['', 'HOTEL', 'BB', 'PENSION', 'GUEST_HOUSE'];
    return categories[categoryIndex] || '';
  };

  const handleRecommendation = () => {
    const direction = convertToDirection(selectMap);
    const type = convertToType(selectCategory);
    navigate('/stay/recommend', { state: { direction, type, price } });
  };

  return (
    <div className="flex flex-col gap-[33px]">
      <h2 className="text-primary-orange text-[16px] font-semibold mt-[36px] ml-[27px]">
        숙소
      </h2>
      <div className="text-[14px] text-gray-dg gap-[11px] ml-[27px]">
        <h1 className="text-[20px] text-black font-semibold mb-[5px]">
          사용자 맞춤 추천
        </h1>
        취향에 맞는 숙소를 추천해드립니다.
      </div>
      <Location
        className={'mb-[25px]'}
        selectMap={selectMap}
        setSelectMap={handleSelectMap}
      />
      <StayCategory
        className={`mb-[25px] ${selectCategory === -1 ? 'blur' : ''}`}
        selectCategory={selectCategory}
        setSelectCategory={handleSelectCategory}
      />
      <EstimatePrice
        price={price}
        setPrice={setPrice}
        className={price === -1 ? 'blur' : ''}
      />
      <button
        className={`text-right text-[15px] font-semibold text-primary-orange mr-[15px] hover:underline ${
          selectMap === -1 || selectCategory === -1 || price === -1
            ? 'blur'
            : ''
        }`}
        disabled={selectMap === -1 || selectCategory === -1 || price === -1}
        onClick={handleRecommendation}
      >
        숙소 추천 보러가기 -&gt;
      </button>
    </div>
  );
};

export default Stay;
