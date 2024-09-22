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

export {
    getAuthWithdraw,
}