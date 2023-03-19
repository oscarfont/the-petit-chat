import HttpClient from "@/lib/adapters/http/HttpClient";
import OpenAIClient from "@/lib/openai/OpenAIClient";

describe("OpenAIClient tests", () => {
  const httpClient = new HttpClient();
  const openAiClient = new OpenAIClient(httpClient);

  test("Check API_KEY is added successfully from .env variables", () => {
    expect(openAiClient.apiKeyIsNotEmpty()).toBeTruthy();
  });

  test("Sending a completion POST request to OpenAI returns a 200 code", () => {
    // TODO: to complete with sueprtest
  });
});
