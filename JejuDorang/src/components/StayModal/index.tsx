import { useState, useEffect } from 'react';
import { Lodging } from '@type/Stays';
import { getStay, postSaveStay } from '@apis/stay';
import Bookmark from '#img/bookMark.svg';
import Spinner from '@components/Spinner';
import { renderStars, renderReviewSummary } from '@utils/render';

interface Props {
  lodgingId: number;
  onClose: () => void;
}

const StayModal = ({ lodgingId, onClose }: Props) => {
  const [stayDetail, setStayDetail] = useState<Lodging | null>(null);
  const [loading, setLoading] = useState(true);
  const [showSaveModal, setShowSaveModal] = useState(false);

  useEffect(() => {
    const fetchStayDetail = async () => {
      try {
        const data = await getStay(lodgingId);
        setStayDetail(data);
      } catch (error) {
        console.error('Failed to fetch stay detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStayDetail();
  }, [lodgingId]);

  const handleSaveButtonClick = async () => {
    try {
      const data = await postSaveStay(lodgingId);
      if (data === false) {
        alert('숙소 저장에 실패했습니다.');
        return;
      }
      setShowSaveModal(true);
      setTimeout(() => {
        setShowSaveModal(false);
      }, 1500);
    } catch (error) {
      console.error('Failed to save stay:', error);
      alert('숙소 저장에 실패했습니다.');
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <Spinner size={48} color="#F1C4A3" />
      </div>
    );
  }

  if (!stayDetail) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {showSaveModal && (
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="flex w-[260px] h-[170px] bg-white p-4 rounded-lg shadow-lg items-center justify-center">
              <p className="font-semibold text-center">
                숙소가 저장되었습니다.
              </p>
            </div>
          </div>
        )}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              {stayDetail.name}
              {renderStars(stayDetail.rating)}
            </h2>
            <button
              onClick={onClose}
              className="text-2xl font-bold hover:text-primary-orange"
            >
              &times;
            </button>
          </div>
          <img
            src={stayDetail.image}
            alt={stayDetail.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">정보</span>
            <button
              className="bg-blue-100 text-blue font-semibold py-1 px-3 rounded-full flex items-center hover:text-primary-orange"
              onClick={handleSaveButtonClick}
            >
              <img src={Bookmark} alt="Bookmark" className="h-5 w-5 mr-1" />
              숙소 저장
            </button>
          </div>
          <p className="mb-2 font-medium">{stayDetail.address}</p>
          <p className="mb-4 font-medium">{stayDetail.contactNumber}</p>
          <div className="flex items-center mb-4">
            {renderStars(stayDetail.rating)}
            <span className="ml-2 text-sm text-gray-500">
              리뷰 {stayDetail.reviewCount}개
            </span>
          </div>
          {renderReviewSummary(stayDetail)}
          <h3 className="text-xl font-bold mb-2">리뷰</h3>
          {stayDetail.reviews.map((review, index) => (
            <div key={index} className="border-t pt-4 mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={review.profileUrl}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    {review.relativeTimeDescription}
                  </p>
                </div>
              </div>
              {renderStars(review.rating)}
              <p className="mt-2">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StayModal;
