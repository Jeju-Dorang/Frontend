import { mypage } from '@type/mypage';
import { api } from './index';

const getMypageData = async (): Promise<mypage | null> => {
    try {
        const response = await api.get<mypage>(
            true,
            '/information',
        );
        return response.data;
    } catch (error) {
            console.error('mypage information failed:', error);
            return null;
        }

    };

export {
    getMypageData,
};