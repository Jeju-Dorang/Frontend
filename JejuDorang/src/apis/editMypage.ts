import { StayLocation } from "@type/location";
import { api } from ".";

const getAuthWithdraw = async (): Promise<boolean> => {
    try {
        const response = await api.get<null>(
            true,
            '/auth/kakao/unlink',
            );
        console.log("getDorangActivity response : ", response);
        return true;
    } catch (error) {
        console.error('Failed to AuthWithdraw :', error);
        return false;
    }
};

const patchMypageProfileImage = async (memberImage:File) => {
    if (!memberImage) {
        console.error("memberImage is null or undefined");
        return false;
    }
    
    const formData = new FormData();
    formData.append('file', memberImage);

    try {
        console.log("profileImage : ", memberImage);
         // FormData 내용 출력
        formData.forEach((value, key) => {
            console.log(`Key: ${key}, Value: ${value}`);
        });
        const response = await api.imgPost<boolean, FormData>(
            true,
            '/image/profile',
            formData 
        );
        console.log("patchMypageProfileImage response : ", response);
        return true;
    } catch (error) {
        console.error('editing profile image failed:', error);
        return false;
    }
}

const patchMypageProfileContent = async (memberContent:string): Promise<boolean> => {
    try {
        console.log("profileImage : ", memberContent);
        const response = await api.patch<boolean, string>(
            true,
            '/information/content',
            memberContent
        );
        console.log("patchMypageProfileContent response : ", response);
        return true;
    } catch (error) {
        console.error('editing profile content failed:', error);
        return false;
    }
}

const postLodgingData = async (stay : StayLocation) : Promise<boolean> => {
    try {
        const response = await api.post<boolean, StayLocation>(
            true,
            '/information/lodging',
            stay
        );
        console.log("postLodgingData response : ", response);
        return true;
    } catch (error) {
        console.error('Failed posting lodgingData:', error);
        return false;
    }
}



export {
    getAuthWithdraw,
    patchMypageProfileContent,
    patchMypageProfileImage,
    postLodgingData
}