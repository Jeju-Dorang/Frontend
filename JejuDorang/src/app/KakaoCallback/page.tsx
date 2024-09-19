import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getToken } from '@apis/auth';
import Spinner from '@components/Spinner';

const KakaoCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const handleKakaoLogin = async (code: string) => {
    try {
      const isSuccess = await getToken(code);
      if (!isSuccess) {
        console.error('Kakao login failed');
        navigate('/login');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error);
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLoading && (
        <Fragment>
          <Spinner size={48} color="#F1C4A3" />
          <p className="mt-4 text-lg font-semibold">카카오 로그인 처리 중...</p>
        </Fragment>
      )}
    </div>
  );
};

export default KakaoCallback;
