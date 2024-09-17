export type CHAT = {
    type: 'user' | 'bot'; 
    text: string;
    url?: string;
}