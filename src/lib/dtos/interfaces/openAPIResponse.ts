export interface openAIAPIResponse {
    choices: Choice[];
    created: number;
    id:      string;
    model:   string;
    object:  string;
}

export interface Choice {
    delta:         Delta;
    finish_reason: null | string;
    index:         number;
}

export interface Delta {
    role?: string;
    content?: string;
}
