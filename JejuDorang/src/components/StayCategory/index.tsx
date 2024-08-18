import { stayCategory } from '@constants/category';
interface Props {
  className?: string;
  selectCategory: number;
  setSelectCategory: (index: number) => void;
}

const StayCategory = ({
  className,
  selectCategory,
  setSelectCategory,
}: Props) => {
  const renderButton = stayCategory.map((item) => {
    const isSelected = selectCategory === item.id;
    return (
      <button
        onClick={() => setSelectCategory(item.id)}
        key={item.id}
        className={`w-[75px] h-[31px] text-[10px] font-semibold border-[1px] border-gray-dg rounded-[9px] p-[3px] ${
          isSelected ? 'bg-primary-orange text-black' : 'text-gray-dg'
        }`}
      >
        {item.name}
      </button>
    );
  });
  return (
    <div className={className}>
      <h1 className="text-[14px] font-semibold ml-[27px] mb-[7px]">
        숙박 유형
      </h1>
      <div className="flex flex-row gap-[10px] ml-[25px]">{renderButton}</div>
    </div>
  );
};

export default StayCategory;
