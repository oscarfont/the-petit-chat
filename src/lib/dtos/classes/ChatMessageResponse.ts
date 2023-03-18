import { chatMessageResponse } from "../interfaces/chatMessageResponse";
import { openAIAPIResponse } from "../interfaces/openAPIResponse";

class ChatMessageResponse implements chatMessageResponse{

    id: string = '';
    model: string = '';
    message: string = '';
    contentLength: number = 0;

    constructor(data?: chatMessageResponse){
        if(data) Object.assign(this, data)
    }

    fromOpenAPIResponse(data: openAIAPIResponse){
        this.id = data.id;
        this.model = data.model;
        this.message = data.choices[0].delta.content ? data.choices[0].delta.content : '';
        this.contentLength = data.choices[0].delta.content?.length ? data.choices[0].delta.content?.length : 0;
    }
}

export default ChatMessageResponse