import { mypageProfile } from "@type/mypage";
import Header from "./Header";
import Message from "./Message";
import Place from "./Place";
import Profile from "./Profile";
import Withdraw from "./Withdraw";

const EditProfile = ({memberName,profileImage,memberComment,lodgingAddress}
    :mypageProfile) => {
        return (
            <>
            <Header />
            <Profile
                profileImage = {profileImage}
                name={memberName}
            />
            <Message memberComment={memberComment}/>
            <Place place={lodgingAddress}/>
            <Withdraw />
            </>

        );
}

export default EditProfile;