import KakaoLoginImg from '#img/login/kakaoLogin.webp';
import jejuDorang from '#img/login/jejuDorang.webp';
import { postLogin } from '@apis/postLogin';

const LoginButton = () => {
  const handleLogin = async () => {
    //post보내서 jwt받아오면 store에 저장
    window.location.href = 'http://localhost:8080/auth/kakao/login';
    return postLogin().then((res) => {
      console.log(res);
    });
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
