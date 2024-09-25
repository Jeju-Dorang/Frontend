import { Diary } from '@type/diary';
import { api } from './index';

const getAllDiaries = async (): Promise<Diary[] | null> => {
    try {
    const response = await api.get<Diary[]>(true, '/information/diaries');
    return response.data;
    } catch (error) {
        console.error('Error fetching diary list:', error);
        return null;
    }
};

export {
    getAllDiaries,
}