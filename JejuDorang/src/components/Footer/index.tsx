import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Activity from '#img/footer/notClicked/activity.webp';
import Home from '#img/footer/notClicked/home.webp';
import Chat from '#img/footer/notClicked/chat.webp';
import Record from '#img/footer/notClicked/record.webp';
import User from '#img/footer/notClicked/user.webp';
import ClickActivity from '#img/footer/Clicked/activity.webp';
import ClickHome from '#img/footer/Clicked/home.webp';
import ClickChat from '#img/footer/Clicked/chat.webp';
import ClickRecord from '#img/footer/Clicked/record.webp';
import ClickUser from '#img/footer/Clicked/user.webp';

const Footer = () => {
  const [activity, setActivity] = useState<boolean>(false);
  const [home, setHome] = useState<boolean>(true);
  const [chat, setChat] = useState<boolean>(false);
  const [record, setRecord] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    handleChange(currentPath === '/' ? '/' : currentPath.slice(1));
  }, [location]);

  const handleChange = (target: string) => {
    setActivity(target === 'activity');
    setHome(target === '/');
    setChat(target === 'dorang');
    setRecord(target === 'record');
    setUser(target === 'mypage');

    if (target !== location.pathname.slice(1) && target !== '/') {
      navigate(`/${target}`);
    } else if (target === '/' && location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <div className="flex w-full h-[90px] max-w-[440px] bg-white rounded-b-[20px]
                    items-center justify-center gap-[42px] shadow-[0_-4px_14px_rgba(0,0,0,0.10)]
                    fixed bottom-0 z-10">
      <button onClick={() => handleChange('activity')}>
        <img
          src={activity ? ClickActivity : Activity}
          alt="activity router"
          className="w-[25px] h-[25px]"
        />
      </button>
      <button onClick={() => handleChange('dorang')}>
        <img
          src={chat ? ClickChat : Chat}
          alt="chat router"
          className="w-[25px] h-[25px]"
        />
      </button>
      <button onClick={() => handleChange('/')}>
        <img
          src={home ? ClickHome : Home}
          alt="home router"
          className="w-[25px] h-[25px]"
        />
      </button>
      <button onClick={() => handleChange('record')}>
        <img
          src={record ? ClickRecord : Record}
          alt="record router"
          className="w-[25px] h-[25px]"
        />
      </button>
      <button onClick={() => handleChange('mypage')}>
        <img
          src={user ? ClickUser : User}
          alt="user router"
          className="w-[25px] h-[25px]"
        />
      </button>
    </div>
  );
};

export default Footer;


