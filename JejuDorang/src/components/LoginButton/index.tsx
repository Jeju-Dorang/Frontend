import KakaoLoginImg from '#img/login/kakaoLogin.webp';
import jejuDorang from '#img/login/jejuDorang.webp';

const LoginButton = () => {
  const handleLogin = async () => {
    const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

    window.location.href = kakaoAuthUrl;
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        src={jejuDorang}
        alt="제주도랑"
        className="hover:opacity-90 transition-opacity"
      />
      <button className="focus:outline-none" onClick={handleLogin}>
        <img
          src={KakaoLoginImg}
          alt="카카오 로그인"
          className="hover:opacity-90 transition-opacity"
        />
      </button>
    </div>
  );
};

export default LoginButton;
