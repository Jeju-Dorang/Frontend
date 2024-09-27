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

const patchMypageProfileImage = async (memberImage:string): Promise<boolean> => {
    try {
        const response = await api.patch<boolean, string>(
            true,
            '/information/image',
            memberImage
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
        const response = await api.patch<boolean, string>(
            true,
            '/information/image',
            memberContent
        );
        return true;
    } catch (error) {
        console.error('editing profile content failed:', error);
        return false;
    }
}

export {
    getAuthWithdraw,
    patchMypageProfileContent,
    patchMypageProfileImage
}