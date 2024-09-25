import { Stays } from '@type/Stays';
import starIcon from '#img/star.svg';

interface Props {
  stay: Stays;
}

const StayInfoCard = ({ stay }: Props) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => {
          const fillPercentage = Math.max(
            0,
            Math.min(100, (rating - index) * 100),
          );
          return (
            <div key={index} className="relative w-5 h-5">
              <div
                className="absolute inset-0 z-10"
                style={{
                  backgroundImage: `linear-gradient(to right, #FFD700 ${fillPercentage}%, transparent ${fillPercentage}%)`,
                  WebkitMaskImage: `url(${starIcon})`,
                  maskImage: `url(${starIcon})`,
                }}
              />
              <img
                src={starIcon}
                alt="Star"
                className="w-full h-full opacity-30"
              />
            </div>
          );
        })}
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-[15px] border shadow-md p-4 mx-[10px] hover:shadow-2xl cursor-pointer">
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
