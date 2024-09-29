import { Diary } from '@type/diary';
import { api } from './index';
import { DiaryPreview } from '@type/diaryPreview';

const getAllDiaries = async (): Promise<DiaryPreview[] | null> => {
    try {
        const response = await api.get<DiaryPreview[]>(true, '/information/diaries');
    return response.data;
    } catch (error) {
        console.error('Error fetching diary list:', error);
        return null;
    }
};

const getDiary = async (diaryId:number) : Promise<Diary | null> => {
    try {
        const response = await api.get<Diary>(true, `/information/diary/${diaryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching diary data:', error);
        return null;
    }
}

const patchSecret = async (diaryId: number, secret:string) : Promise<boolean> => {
    try {
        const response = await api.patch<boolean, null>(
            true,
            `/information/diary/${diaryId}?secret=${secret}`,
            null)
        return true
    } catch (error) {
        console.error('Error patch secret:', error);
        return false;
    }
}

const deleteDiary = async (diaryId: number) : Promise<boolean> => {
    try {
        const response = await api.delete<boolean>(
            true,
            `/information/diary/${diaryId}`)
        return true
    } catch (error) {
        console.error('Error delete diary:', error);
        return false;
    }
}


export {
    getAllDiaries,
    getDiary,
    patchSecret,
    deleteDiary
}