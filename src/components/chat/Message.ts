import { MESSAGE_ROLE } from "../message/MessageRole";

export interface Message{
    id: string,
    content: string,
    time: string,
    role: MESSAGE_ROLE
}