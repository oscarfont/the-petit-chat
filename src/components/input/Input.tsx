import { useContext, useState } from "react";
import { ChatContext, currentTime } from "../chat/ChatProvider";
import { SendIcon } from "../Icons";
import { v4 as uuidv4 } from "uuid";
import { Message } from "../chat/Message";
import { MESSAGE_ROLE } from "../message/MessageRole";

export default function Input() {
  const [userMessage, setUserMessage] = useState<string>("");
  const { addMessage } = useContext(ChatContext);

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
    } catch (error) {
      console.error(error);
    }
  };

  const sumbitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
  };

  return (
    <form onSubmit={sumbitMessage}>
      <div className="relative block">
        <input
          className="w-full rounded-2xl p-4"
          placeholder="Escribe aquí tu mensaje..."
          type="text"
          value={userMessage}
          onChange={handleMessageChange}
        />
        <button
          type="submit"
          className="bg-dark-grey absolute top-2 right-2 rounded-full p-1.5"
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );
}
