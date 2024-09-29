import axios from "axios"

const KakaoRestApiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;

const getLocalAddress = async (address : string) => {
    try {
        const response = await axios.get(
            `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
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