import { getMypageData } from "@apis/mypage";
import EditProfile from "@components/EditProfile";
import { mypageProfile } from "@type/mypage";
import { useEffect, useState } from "react";

const EditMyPage = () => {
    const [profile, setProfile] = useState<mypageProfile>();

    useEffect(() => {
        fetchMypageData();
    }, []);

    const fetchMypageData = async () => {
        const mypageData = await getMypageData();
        if (mypageData) {
            const profileData : mypageProfile = {
                memberName: mypageData.memberName,
                memberComment: mypageData.memberComment,
                profileImage: mypageData.profileImage,
                lodgingAddress: mypageData.lodgingAddress,
            }
            setProfile(profileData)
        }
    };
    
    return(
        <>
        {profile &&
            <EditProfile 
                memberName={profile.memberName}
                email={profile.email}
                profileImage={profile.profileImage}
                memberComment={profile.memberComment}
                lodgingAddress={profile.lodgingAddress}
            />
        }
        </>
    );
};

export default EditMyPage;