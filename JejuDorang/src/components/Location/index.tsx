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
      <div key={index} className="flex flex-col items-center">
        <div
          onClick={() => setSelectMap(index)}
          className={`w-[75px] h-[75px] rounded-[9px] cursor-pointer border-[3px] ${
            isSelected ? 'border-primary-orange' : ''
          } bg-auto`}
          style={{
            backgroundImage: `url(${item.src})`,
          }}
        ></div>
        <p className="text-[10px] text-center font-semibold">{item.name}</p>
      </div>
    );
  });

  return (
    <div className={className}>
      <h3 className="text-[14px] font-semibold mb-[6px] ml-[27px]">위치</h3>
      <div className="flex flex-row justify-evenly">{renderMap}</div>
    </div>
  );
};

export default Location;
