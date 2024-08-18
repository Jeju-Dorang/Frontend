import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Activity from '#img/footer/notClicked/activity.webp'
import Home from '#img/footer/notClicked/home.webp'
import Chat from '#img/footer/notClicked/chat.webp'
import Record from '#img/footer/notClicked/record.webp'
import User from '#img/footer/notClicked/user.webp'
import ClickActivity from '#img/footer/Clicked/activity.webp'
import ClickHome from '#img/footer/Clicked/home.webp'
import ClickChat from '#img/footer/Clicked/chat.webp'
import ClickRecord from '#img/footer/Clicked/record.webp'
import ClickUser from '#img/footer/Clicked/user.webp'
import { target } from "@type/footerTarget";


const Footer = () => {
    const [activity, setActivity] = useState<boolean>(false);
    const [home, setHome] = useState<boolean>(true);
    const [chat, setChat] = useState<boolean>(false);
    const [record, setRecord] = useState<boolean>(false);
    const [user, setUser] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleChange = (target:target) => {
        setActivity(target === 'activity');
        setHome(target === 'home');
        setChat(target === 'chat');
        setRecord(target === 'record');
        setUser(target === 'user');
        if (target === 'chat') {navigate('/dorang');
        } else if (target === 'record') { navigate('/record');
        } else if (target === 'user') {navigate('/mypage');
        } else if (target === 'home') {navigate('/');
        } else if (target === 'activity') {navigate('/activity');
    }}

    return (
        <div className="fixed flex w-screen h-[90px] bottom-0 bg-white
                        items-center justify-center gap-[42px] z-40"
            style={{ boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)' }}
        >
            <button onClick={() =>handleChange('activity')}>
                    <img src={activity ? ClickActivity: Activity} alt="activityrouter"
                        className="w-[25px] h-[25px]"
                    />
            </button>
            <button onClick={() =>handleChange('chat')}>
                    <img src={chat ? ClickChat: Chat} alt="chat router"
                        className="w-[25px] h-[25px]"
                    />
            </button>
            <button onClick={() =>handleChange('home')}>
                    <img src={home ? ClickHome: Home} alt="home router"
                        className="w-[25px] h-[25px]"
                    />
            </button>
            <button onClick={() =>handleChange('record')}>
                    <img src={record ? ClickRecord: Record} alt="record router"
                        className="w-[25px] h-[25px]"
                    />
            </button>
            <button onClick={() =>handleChange('user')}>
                    <img src={user ? ClickUser: User} alt="user router"
                        className="w-[25px] h-[25px]"
                    />
            </button>
        </div>
    );
}

export default Footer;