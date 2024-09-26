import { mypageProfile } from "@type/mypage";
import Header from "./Header";
import Message from "./Message";
import Place from "./Place";
import Profile from "./Profile";
import Withdraw from "./Withdraw";
import { useState } from "react";

const EditProfile = ({memberName,profileImage,memberComment,lodgingAddress}
    :mypageProfile) => {
        const [imageSrc, setImageSrc] = useState<string>('');
        const [content, setContent] = useState<string>('');

        return (
            <>
            <Header 
                imageSrc = {imageSrc}
                content = {content}
            />
            <Profile
                profileImage = {profileImage}
                name={memberName}
                setImageSrc = {setImageSrc}
            />
            <Message 
                memberComment={memberComment}
                setContent = {setContent}
            />
            <Place place={lodgingAddress}/>
            <Withdraw />
            </>

        );
}

export default EditProfile;