import { useAuthStore } from '@states/useAuthStore';
import { CreateMessage, CreateThread } from '@type/chatApi';
import axios from 'axios';

const openaiKey = import.meta.env.VITE_OPENAI_SECRET_KEY;
const assistantsId = import.meta.env.VITE_OPENAI_ASSISTANTS_ID;
const threadId = import.meta.env.VITE_OPENAI_THREAD_ID;
const openaiBaseUrl = import.meta.env.VITE_OPENAI_thread_BASE_URL;

// const postCreateThread = async (): Promise<CreateThread[] | null> => {
//     try {
//         const response = await axios.post(
//         'https://api.openai.com/v1/threads',
//         {},
//         {
//             headers: {
//                 'Authorization': `Bearer ${openai_key}`, // 토큰이나 인증 헤더
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2' 
//             }
//         }
//         );
//     console.log("postCreateThread response : ", response)
//     useAuthStore.getState().setThreadId(response.data.id)
//     console.log("ThreadId : ", useAuthStore.getState().threadId)

//     return response.data;
//     } catch (error) {
//         console.error('Error create thread :', error);
//         return null;
//     }
// };

// 타입으로 하기에 너무길어서 생략
const postCreateMessage = async (content : string, interest : string[]) => {
    const interestString = interest.join(", ");
    const prompt = `나는 제주도 ${interestString}에 관심이 있습니다. ${content}에 대해 알려주세요.`;

    const sendMessage : CreateMessage = {
        role : "user",
        content : prompt
    }

    try {
        const response = await axios.post(
            `${openaiBaseUrl}/${threadId}/messages`,
            sendMessage,
            {
                headers: {
                    'Authorization': `Bearer ${openaiKey}`, // 토큰이나 인증 헤더
                    'Content-Type': 'application/json',
                    'OpenAI-Beta': 'assistants=v2' 
                    }
            }
            );
            return response;
    } catch (error) {
            console.error('Error create message :', error);
            return null;
    }
}

const postRunAssistant = async () =>{
    try {
        const response = await axios.post(
            `${openaiBaseUrl}/${threadId}/runs`,
            {
                "assistant_id": assistantsId
            },
            {
                headers: {
                    'Authorization': `Bearer ${openaiKey}`, // 토큰이나 인증 헤더
                    'Content-Type': 'application/json',
                    'OpenAI-Beta': 'assistants=v2' 
                    }
            }
            );
            return response.data;
    } catch (error) {
            console.error('Error run Assistant :', error);
            return null;
    }
}

const getThreadList = async () =>{
    try {
        const response = await axios.get(
            `${openaiBaseUrl}/${threadId}/messages`,
            {
                headers: {
                    'Authorization': `Bearer ${openaiKey}`, // 토큰이나 인증 헤더
                    'Content-Type': 'application/json',
                    'OpenAI-Beta': 'assistants=v2' 
                    }
            }
            );
            // "role": "assistant"인 데이터 필터링해서 가장 마지막 항목의 value만 가져오기
            if (response.data.data[0].role !== "assistant" || response.data.data[0].content.length === 0) {
                return false
            } else {
                const assistantMessages = response.data.data[0].content[0].text.value
                return assistantMessages;
            }
    } catch (error) {
            console.error('Error fetch ThreadList :', error);
            return null;
    }
}

export {
    // postCreateThread,
    postCreateMessage,
    postRunAssistant,
    getThreadList
}