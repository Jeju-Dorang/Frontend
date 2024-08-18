import { MAPS } from '@constants/maps';

interface Props {
  className?: string;
  selectMap: number;
  setSelectMap: (index: number) => void;
}

const Location = ({ className, selectMap, setSelectMap }: Props) => {
  const renderMap = MAPS.map((item, index) => {
    const isSelected = selectMap === index;
    return (
      <div key={index} onClick={() => setSelectMap(index)}>
        <img
          src={item.src}
          alt={item.name}
          className={`p-3 border-[3px] rounded-[9px] ${
            isSelected ? 'border-primary-orange' : 'border-transparent'
          }`}
        />
        <p className="text-[10px] text-center font-semibold">{item.name}</p>
      </div>
    );
  });

  return (
    <div className={className}>
      <h3 className="text-[14px] font-semibold mb-[6px] ml-[27px]">위치</h3>
      <div className="flex flex-row gap-[4px]">{renderMap}</div>
    </div>
  );
};

export default Location;
