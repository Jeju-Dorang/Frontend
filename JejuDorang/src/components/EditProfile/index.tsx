import { Fragment } from 'react/jsx-runtime';
import profileImg from '#img/profile.webp';
import { useState } from 'react';

interface Props {
    userName: string;
    userEmail: string;
    userDetail: string; //dDay가 아니라 한줄소개 text로 받아야함
}

//이미지도 인자로 받아야함, 백엔드와 얘기필요
const EditProfile = ({ userName, userEmail, userDetail }: Props) => {
    const [name, setName] = useState<string>(userName);
    const [email, setEmail] = useState<string>(userEmail);
    const [detail, setDetail] = useState<string>(userDetail);

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
}

export default EditProfile;
