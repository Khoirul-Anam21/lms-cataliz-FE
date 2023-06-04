
export interface Comment {
    text: string;
    replies: Reply[];
}

export interface Reply {
    id: number;
    text: string;
    openInput: boolean
}