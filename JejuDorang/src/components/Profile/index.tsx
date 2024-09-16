import { Fragment } from 'react/jsx-runtime';
import profileImg from '#img/profile.webp';

interface Props {
  name: string;
  email: string;
  detail: string; //상태메세지를 위한 string으로 변수 및 타입 변경
}

//이미지도 인자로 받아야함, 백엔드와 얘기필요
const Profile = ({ name, email, detail}: Props) => {
  return (
    <Fragment>
      <div className="flex w-full gap-[21px] pt-[30px] px-[30px] pb-[9px]">
        <img src={profileImg} alt="Profile" />
        <div>
          <h1 className="font-bold text-[20px]">{name}</h1>
          <p className="text-gray-dg">{email}</p>
          <h3 className="mt-[3px]">{detail}</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
