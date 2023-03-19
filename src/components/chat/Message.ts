import { MESSAGE_ROLE } from "../message/MessageRole";

export interface Message{
    id: string,
    content: string,
    role: MESSAGE_ROLE
}