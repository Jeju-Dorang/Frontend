import { getStays } from '@apis/stay';
import { Stays } from '@type/Stays';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RecommendStay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { direction, type, price } = location.state || {};

  const [stayData, setStayData] = useState<Stays[] | null>(null);

  useEffect(() => {
    console.log(direction, type, price);
    if (
      !direction ||
      !type ||
      price === undefined ||
      price === -1 ||
      price === 0
    ) {
      navigate('/stay');
      alert('올바르지 않은 값입니다.');
    } else {
      const fetchStayData = async () => {
        const data = await getStays(direction, type, price);
        setStayData(data);
      };
      fetchStayData();
    }
  }, [direction, type, price, navigate]);

  if (!stayData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* 여기에 stayData를 사용하여 추천 숙소 목록을 렌더링하는 로직 추가 */}
      <h1>추천 숙소</h1>
      {stayData.map((stay, index) => (
        <div key={index}>
          {/* 각 숙소 정보 렌더링 */}
          <p>{stay.name}</p>
          {/* 기타 숙소 정보 */}
        </div>
      ))}
    </div>
  );
};

export default RecommendStay;
