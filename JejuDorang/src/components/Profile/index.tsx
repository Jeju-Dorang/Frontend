import { Fragment } from 'react/jsx-runtime';
import profileImg from '#img/profile.webp';

interface Props {
  name: string | null;
  image: string | null;
  detail: string | null;
}

const Profile = ({ name, image, detail }: Props) => {
  return (
    <Fragment>
      <div className="flex w-full gap-[21px] pt-[30px] px-[30px] pb-[9px]">
        <img
          src={image ? image : profileImg}
          alt="Profile"
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
        <div>
          <h1 className="font-bold text-[20px]">{name}</h1>
          <h3 className="mt-[3px] text-gray-dg font-semibold">{detail || '상태메세지'}</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
