import { LocationApiRequest } from "@type/location";
import { StayApiResponse } from "@type/stay";
import { api } from ".";

const postLocationActivity = async (location: LocationApiRequest): Promise<StayApiResponse[] | null> => {
    try {
        const response = await api.post<StayApiResponse[], LocationApiRequest>(
            true,
            '/tourspot/recommendation',
            location
            );
            console.log("postLocationActivity response: ", response);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch location activity:', error);
        return null;
    }
};

export {
    postLocationActivity,
}