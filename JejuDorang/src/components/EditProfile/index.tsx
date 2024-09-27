import { mypageProfile } from "@type/mypage";
import Header from "./Header";
import Message from "./Message";
import Place from "./Place";
import Profile from "./Profile";
import Withdraw from "./Withdraw";
import { useState } from "react";

const EditProfile = ({memberName,profileImage,memberComment,lodgingAddress}
    :mypageProfile) => {
        const [imageSrc, setImageSrc] = useState<File | null>(null);
        const [content, setContent] = useState<string>('');

        const finalContent = content === '' ? memberComment : content;

        return (
            <>
            <Header 
                {...(imageSrc && { imageSrc })}
                content={finalContent}
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