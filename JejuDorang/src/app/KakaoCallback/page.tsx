import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getToken } from '@apis/auth';

const KakaoCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleKakaoLogin = async (code: string) => {
    const isSuccess = await getToken(code);
    if (!isSuccess) {
      console.error('Kakao login failed');
      return;
    }
    navigate('/');
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    if (code) {
      handleKakaoLogin(code);
    } else {
      console.error('No auth code received');
      navigate('/login');
    }
  }, [location, navigate]);

  return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoCallback;
