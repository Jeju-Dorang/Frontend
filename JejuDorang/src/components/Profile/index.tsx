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
      <div className="flex w-full gap-4 p-6">
        <img src={profileImg} alt="Profile" />
        <div className="mt-2">
          <h1 className="font-bold">{name}</h1>
          <p className="text-gray-lg">{email}</p>
          <h3 className="decoration-1">🍊제주살이 D-{dDay}</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
