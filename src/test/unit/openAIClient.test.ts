import HttpClient from "@/lib/adapters/http/HttpClient";
import OpenAIClient from "@/lib/openai/OpenAIClient";

describe("OpenAIClient tests", () => {
    const httpClient = new HttpClient();
    const openAiClient = new OpenAIClient(httpClient);

    test('Check API_KEY is added successfully from .env variables', () => {
        expect(openAiClient.apiKeyIsNotEmpty()).toBeTruthy();
    });
});