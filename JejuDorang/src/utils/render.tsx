import { Lodging } from '@type/Stays';

const StarIcon = () => (
  <svg
    width="0"
    height="0"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <mask id="star-mask">
        <path
          fill="white"
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        />
      </mask>
    </defs>
  </svg>
);

export const renderStars = (rating: number) => {
  return (
    <div className="flex items-center">
      <StarIcon />
      {[...Array(5)].map((_, index) => {
        const fillPercentage = Math.max(
          0,
          Math.min(100, (rating - index) * 100),
        );
        return (
          <div key={index} className="relative w-5 h-5">
            <div
              className="absolute inset-0 bg-gray-300"
              style={{
                maskImage: 'url(#star-mask)',
                WebkitMaskImage: 'url(#star-mask)',
              }}
            />
            <div
              className="absolute inset-0 bg-yellow-400"
              style={{
                width: `${fillPercentage}%`,
                maskImage: 'url(#star-mask)',
                WebkitMaskImage: 'url(#star-mask)',
              }}
            />
          </div>
        );
      })}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export const renderReviewSummary = (stayDetail: Lodging | null) => {
  if (!stayDetail) return null;

  const totalReviews = stayDetail.reviewCount;
  const fiveStarPercentage = (stayDetail.fiveStar / totalReviews) * 100;
  const fourStarPercentage = (stayDetail.fourStar / totalReviews) * 100;
  const threeStarPercentage = (stayDetail.threeStar / totalReviews) * 100;
  const twoStarPercentage = (stayDetail.twoStar / totalReviews) * 100;
  const oneStarPercentage = (stayDetail.oneStar / totalReviews) * 100;

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-bold mb-2">
        <span className="text-blue">{stayDetail.name}</span> 리뷰 요약
      </h3>
      <div className="flex items-center justify-between mb-2">
        <span>5점</span>
        <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-yellow-400 h-2.5 rounded-full"
            style={{ width: `${fiveStarPercentage}%` }}
          ></div>
        </div>
        <span>{stayDetail.fiveStar}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span>4점</span>
        <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-yellow-400 h-2.5 rounded-full"
            style={{ width: `${fourStarPercentage}%` }}
          ></div>
        </div>
        <span>{stayDetail.fourStar}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span>3점</span>
        <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-yellow-400 h-2.5 rounded-full"
            style={{ width: `${threeStarPercentage}%` }}
          ></div>
        </div>
        <span>{stayDetail.threeStar}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span>2점</span>
        <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-yellow-400 h-2.5 rounded-full"
            style={{ width: `${twoStarPercentage}%` }}
          ></div>
        </div>
        <span>{stayDetail.twoStar}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>1점</span>
        <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-yellow-400 h-2.5 rounded-full"
            style={{ width: `${oneStarPercentage}%` }}
          ></div>
        </div>
        <span>{stayDetail.oneStar}</span>
      </div>
    </div>
  );
};
