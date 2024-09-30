import { Stays } from '@type/Stays';
import { renderStars } from '@utils/render';

interface Props {
  stay: Stays;
  onClick: () => void;
}

const StayInfoCard = ({ stay, onClick }: Props) => {
  return (
    <div
      className="bg-white rounded-[15px] border shadow-md p-4 mx-[10px] hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-2">
        <h2 className="text-xl font-bold">{stay.name}</h2>
        {renderStars(stay.rating)}
      </div>
      <p className="flex text-gray-600 text-sm mt-1 gap-2">
        {stay.distance}
        <span className="text-blue font-semibold">{stay.address}</span>
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold">
          포근한 위치한 럭셔리 호텔, 레스토랑 및 바/라운지 이용 가능
        </p>
      </div>
      <div className="mt-4">
        <img
          src={stay.image}
          alt={`${stay.name} 이미지`}
          className="h-24 object-cover rounded"
        />
      </div>
    </div>
  );
};

export default StayInfoCard;
