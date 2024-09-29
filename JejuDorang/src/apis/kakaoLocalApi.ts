import axios from "axios"

const KakaoRestApiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;
const KakaoLocalSearchAddress = import.meta.env.VITE_KAKAO_LOCAL_SEARCH_URL;

const getLocalAddress = async (address : string) => {
    try {
        const response = await axios.get(
            `${KakaoLocalSearchAddress}?query=${address}`,
            {
                headers: {
                    'Authorization': `KakaoAK ${KakaoRestApiKey}`,
                    },
            }
            );
            return response;
    } catch (error) {
            console.error('Error fetch localAddress :', error);
            return null;
    }
}

export {
    getLocalAddress,
}