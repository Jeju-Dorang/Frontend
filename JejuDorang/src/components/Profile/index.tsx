import { Fragment } from 'react/jsx-runtime';
import profileImg from '#img/profile.webp';

interface Props {
  name: string;
  email: string;
  dDay: number;
}

//이미지도 인자로 받아야함, 백엔드와 얘기필요
const Profile = ({ name, email, dDay = 0 }: Props) => {
  return (
    <Fragment>
      <div className="flex w-full gap-[21px] pt-[30px] px-[30px] pb-[9px]">
        <img src={profileImg} alt="Profile" />
        <div>
          <h1 className="font-bold text-[20px]">{name}</h1>
          <p className="text-gray-dg">{email}</p>
          <h3 className="mt-[3px]">🍊제주살이 D-{dDay}</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
