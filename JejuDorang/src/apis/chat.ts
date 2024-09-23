import { useAuthStore } from '@states/useAuthStore';
import { CreateMessage, CreateThread } from '@type/chatApi';
import axios from 'axios';

const openai_key = import.meta.env.VITE_OPENAI_SECRET_KEY;
console.log("openapi_key:", openai_key);
const assistants_id = import.meta.env.VITE_OPENAI_ASSISTANTS_ID;

const postCreateThread = async (): Promise<CreateThread[] | null> => {
    try {
        const response = await axios.post(
        'https://api.openai.com/v1/threads',
        {},
        {
            headers: {
                'Authorization': `Bearer ${openai_key}`, // 토큰이나 인증 헤더
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2' 
            }
        }
        );
    console.log("postCreateThread response : ", response)
    useAuthStore.getState().setThreadId(response.data.id)
    console.log("ThreadId : ", useAuthStore.getState().threadId)

    return response.data;
    } catch (error) {
        console.error('Error create thread :', error);
        return null;
    }
};

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
            `https://api.openai.com/v1/threads/${useAuthStore.getState().threadId}/messages`,
            sendMessage,
            {
                headers: {
                    'Authorization': `Bearer ${openai_key}`, // 토큰이나 인증 헤더
                    'Content-Type': 'application/json',
                    'OpenAI-Beta': 'assistants=v2' 
                    }
            }
            );
            // response.data가 유효한 경우에만 postRunAssistant 호출
            console.log("postCreateMessage response : ", response);
            return response;
    } catch (error) {
            console.error('Error create message :', error);
            return null;
    }
}

const postRunAssistant = async () =>{
    try {
        const response = await axios.post(
            `https://api.openai.com/v1/threads/${useAuthStore.getState().threadId}/runs`,
            {
                "assistant_id": assistants_id
            },
            {
                headers: {
                    'Authorization': `Bearer ${openai_key}`, // 토큰이나 인증 헤더
                    'Content-Type': 'application/json',
                    'OpenAI-Beta': 'assistants=v2' 
                    }
            }
            );
            console.log("postRunAssistant response : ", response)
            return response.data;
    } catch (error) {
            console.error('Error run Assistant :', error);
            return null;
    }
}

const getThreadList = async () =>{
    try {
        const response = await axios.get(
            `https://api.openai.com/v1/threads/${useAuthStore.getState().threadId}/messages`,
            {
                headers: {
                    'Authorization': `Bearer ${openai_key}`, // 토큰이나 인증 헤더
                    'Content-Type': 'application/json',
                    'OpenAI-Beta': 'assistants=v2' 
                    }
            }
            );
            console.log("getThreadList response : ", response)
            // "role": "assistant"인 데이터 필터링해서 가장 마지막 항목의 value만 가져오기
            const assistantMessages = response.data.data[0].content[0].text.value

            console.log("lastAssistantMessage response : ", assistantMessages)

            return assistantMessages;
    } catch (error) {
            console.error('Error fetch ThreadList :', error);
            return null;
    }
}

export {
    postCreateThread,
    postCreateMessage,
    postRunAssistant,
    getThreadList
}