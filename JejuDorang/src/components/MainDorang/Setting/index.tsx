import { Link } from 'react-router-dom';
import setting from '#img/setting.webp';

const Setting = () => {
  return (
    <Link
      className="flex justify-end w-full mt-[9px] mr-[13px] mb-[22px] cursor-pointer"
      to={'/settingDorang'}
    >
      <div className="w-[24px] h-[24px]">
        <img
          src={setting}
          alt={'imgToLinkSettingDorang'}
          className="hover:invert"
        />
      </div>
    </Link>
  );
};

export default Setting;
