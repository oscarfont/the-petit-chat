import { httpClient } from "../adapters/http/httpClientInterface";
import ChatMessageResponse from "../dtos/classes/ChatMessageResponse";
import { openAIClient } from "./openAIClientInterface";

class OpenAIClient implements openAIClient{

    private readonly httpClient: httpClient;
    private readonly apiKey: string;

    constructor(private client: httpClient){
        this.httpClient = client;
        this.apiKey = process.env.API_KEY ? process.env.API_KEY : '';
    }

    apiKeyIsNotEmpty(): Boolean{
        return this.apiKey !== undefined && this.apiKey.length > 0;
    }

    generate(message: string): ChatMessageResponse[] {
        throw new Error("Method not implemented.");
    }
}

export default OpenAIClient;