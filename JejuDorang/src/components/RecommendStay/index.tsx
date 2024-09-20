import { getStays } from '@apis/stay';
import { Stays } from '@type/Stays';
import { useState, useEffect } from 'react';

interface Props {
  direction: string;
  type: string;
  price: number;
}

const RecommendStay = ({ direction, type, price }: Props) => {
  const [stayData, setStayData] = useState<Stays[] | null>(null);
  useEffect(() => {
    fetchStayData();
  }, []);

  const fetchStayData = async () => {
    const res = await getStays(direction, type, price);
    if (!res) {
      alert('Failed to fetch stay data');
    }
    setStayData(res);
  };
};

export default RecommendStay;
