import { api } from ".";
import { FullAchievementData } from "@type/achievement";

const getDorangActivity = async (): Promise<FullAchievementData[] | null> => {
    try {
        const response = await api.get<FullAchievementData[]>(
            true,
            '/tourspot/dorangRecommend',
            );
        console.log("getDorangActivity response : ", response);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch dorang activity:', error);
        return null;
    }
};

export {
    getDorangActivity,
}