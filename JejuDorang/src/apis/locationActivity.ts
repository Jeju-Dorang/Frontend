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
        return response.data;
    } catch (error) {
        console.error('Failed to fetch location activity:', error);
        return null;
    }
};

export {
    postLocationActivity,
}

// const postCommentLike = async (commentId: number): Promise<boolean> => {
//   try {
//     await api.post<boolean, null>(
//       true,
//       `/posts/like/comment/${commentId}`,
//       null,
//     );
//     return true;
//   } catch (error) {
//     console.error('Failed to like comment:', error);
//     return false;
//   }
// };