import { useContext, useState } from "react";
import { ChatContext, currentTime } from "../chat/ChatProvider";
import { LoadingDot, SendIcon, ThreeDots } from "../Icons";
import { v4 as uuidv4 } from "uuid";
import { Message } from "../chat/Message";
import { MESSAGE_ROLE } from "../message/MessageRole";

export default function Input() {
  const [userMessage, setUserMessage] = useState<string>("");
  const [canSend, setCanSend] = useState<boolean>(false);
  const { addMessage, isLoading, setLoading } = useContext(ChatContext);

  const fetchTextCompletion = async (userMessage: string) => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });
      const { id, message } = await response.json();
      const chatMessage: Message = {
        id: id,
        content: message,
        role: MESSAGE_ROLE.ASSISTANT,
        time: currentTime(),
      };
      addMessage(chatMessage);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const sumbitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const chatUserMessage: Message = {
      id: uuidv4(),
      content: userMessage,
      role: MESSAGE_ROLE.USER,
      time: currentTime(),
    };
    addMessage(chatUserMessage);
    fetchTextCompletion(userMessage);
    setUserMessage("");
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userMessage = event.target.value;
    setUserMessage(userMessage);
    const isEmpty = userMessage.length > 0;
    setCanSend(isEmpty);
  };

  return (
    <form onSubmit={sumbitMessage}>
      <div className="relative mb-4 block">
        <input
          className="w-full rounded-2xl p-4"
          placeholder="Escribe aquí tu pregunta..."
          type="text"
          value={userMessage}
          onChange={handleMessageChange}
        />
        <button
          id="send-button"
          type="submit"
          className="bg-dark-grey absolute top-2 right-2 inline-block rounded-full p-1.5"
          disabled={!canSend && !isLoading}
        >
          {isLoading ? <ThreeDots /> : <SendIcon />}
        </button>
      </div>
    </form>
  );
}
