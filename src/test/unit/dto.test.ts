import ChatMessageResponse from "../../lib/dtos/classes/ChatMessageResponse";

describe("DTOs unit tests", () => {
  test("should create ChatMessageResponse successfully given the openAPIResponse", () => {
    const data = {
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
    const expectedChaMessage = new ChatMessageResponse({id: data.id, model: data.model, message: data.choices[0].delta.content, contentLength: data.choices[0].delta.content.length})

    const actualMessage = new ChatMessageResponse();
    actualMessage.fromOpenAPIResponse(data);

    expect(actualMessage).toMatchObject(expectedChaMessage);
  });

  test("should create ChatMessageResponse successfully given the openAPIResponse missing content", () => {
    const data = {
        "choices": [
            {
                "delta": {},
                "finish_reason": null,
                "index": 0
            }
        ],
        "created": 1677825464,
        "id": "chatcmpl-6ptKyqKOGXZT6iQnqiXAH8adNLUzD",
        "model": "gpt-3.5-turbo-0301",
        "object": "chat.completion.chunk"
    }
    const expectedChaMessage = new ChatMessageResponse({id: data.id, model: data.model, message: '', contentLength: 0})

    const actualMessage = new ChatMessageResponse();
    actualMessage.fromOpenAPIResponse(data);

    expect(actualMessage).toMatchObject(expectedChaMessage);
  });

  test("should create ChatMessageResponse successfully given the openAPIResponse empty content", () => {
    const data = {
        "choices": [
            {
                "delta": {
                    "content": ""
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
    const expectedChaMessage = new ChatMessageResponse({id: data.id, model: data.model, message: '', contentLength: 0})

    const actualMessage = new ChatMessageResponse();
    actualMessage.fromOpenAPIResponse(data);

    expect(actualMessage).toMatchObject(expectedChaMessage);
  });
});