import { openAIAPIResponse } from "@/lib/dtos/interfaces/openAPIResponse";
import ChatMessageResponse from "@/lib/dtos/classes/ChatMessageResponse";

describe("DTOs unit tests", () => {
  let sampleOpenAIData : openAIAPIResponse;
  beforeAll(() => {
    sampleOpenAIData = {
        "choices": [
            {
                "delta": {
                    "content": "2"
                },
                "finish_reason": null,
                "index": 0
            }
        ],
        "created": 1677825464,
        "id": "chatcmpl-6ptKyqKOGXZT6iQnqiXAH8adNLUzD",
        "model": "gpt-3.5-turbo-0301",
        "object": "chat.completion.chunk"
    }
  });

  test("should create ChatMessageResponse successfully given the openAPIResponse", () => {
    // add content to sample openAPIResponse
    const sampleContent = {content: "2"};
    sampleOpenAIData.choices[0].delta = sampleContent;
    const expectedChaMessage = new ChatMessageResponse({id: sampleOpenAIData.id, model: sampleOpenAIData.model, message: sampleContent.content, contentLength: sampleContent.content.length})

    const actualMessage = new ChatMessageResponse();
    actualMessage.fromOpenAPIResponse(sampleOpenAIData);

    expect(actualMessage).toMatchObject(expectedChaMessage);
  });

  test("should create ChatMessageResponse successfully given the openAPIResponse missing content", () => {
    // add empty object to sample openAPIResponse
    sampleOpenAIData.choices[0].delta = {}
    const expectedChaMessage = new ChatMessageResponse({id: sampleOpenAIData.id, model: sampleOpenAIData.model, message: '', contentLength: 0})

    const actualMessage = new ChatMessageResponse();
    actualMessage.fromOpenAPIResponse(sampleOpenAIData);

    expect(actualMessage).toMatchObject(expectedChaMessage);
  });

  test("should create ChatMessageResponse successfully given the openAPIResponse empty content", () => {
    sampleOpenAIData.choices[0].delta = { content: "" };
    const expectedChaMessage = new ChatMessageResponse({id: sampleOpenAIData.id, model: sampleOpenAIData.model, message: '', contentLength: 0})

    const actualMessage = new ChatMessageResponse();
    actualMessage.fromOpenAPIResponse(sampleOpenAIData);

    expect(actualMessage).toMatchObject(expectedChaMessage);
  });
});