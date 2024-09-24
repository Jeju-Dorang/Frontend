interface text {
    value : string;
    annotations : string[]
}
interface Content {
    type: string;
    text: text[];
}

export interface CreateThread {
    id: string;
    object: string;
    created_at: number;
    metadata : string[];
    tool_resources: string[];
}

export interface CreateMessage {
    role : string;
    content : string;
}

export interface CreateMessageResponse {
    id: string;
    object: string;
    created_at: number;
    assistant_id?: string;
    thread_id: string;
    run_id?: string;
    role: string;
    content: Content[];
    attachments: string[];
    metadata?: string;
}