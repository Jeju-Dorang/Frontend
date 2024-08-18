import './index.css';

interface Props {
  className?: string;
  price: number;
  setPrice: (price: number) => void;
}

const EstimatePrice = ({ className, price, setPrice }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  return (
    <div className={className}>
      <h1 className="text-[14px] font-semibold ml-[27px]">예상 숙박비</h1>
      <div className="flex flex-col items-center">
        <div className="text-[15px] text-center text-primary-orange font-semibold mt-2 mb-[5px]">
          {price} 만원
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={handleChange}
          className="h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default EstimatePrice;
