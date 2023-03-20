import { useContext, useState } from "react";
import { ChatContext } from "../chat/ChatProvider";
import { SendIcon, ThreeDots } from "../Icons";
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
      };
      addMessage(chatMessage);
      setLoading(false);
    } catch (error) {
      console.error(error);
      const errorMessage = {
        id: uuidv4(),
        content:
          "Ha ocurrido un error. Es posible que debido a la alta demanda de peticiones haya fallos puntuales como este. Recarga la página e intenta preguntarme de nuevo.",
        role: MESSAGE_ROLE.ASSISTANT,
      };
      addMessage(errorMessage);
    }
  };

  const sumbitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const chatUserMessage: Message = {
      id: uuidv4(),
      content: userMessage,
      role: MESSAGE_ROLE.USER,
    };
    addMessage(chatUserMessage);
    fetchTextCompletion(userMessage);
    setUserMessage("");
    setCanSend(false);
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
          className="focus:border-focus w-full rounded-2xl bg-slate-50 p-4 focus:outline-none dark:bg-slate-50"
          placeholder="Escribe aquí tu pregunta..."
          type="text"
          value={userMessage}
          onChange={handleMessageChange}
          maxLength={50}
        />
        <button
          id="send-button"
          type="submit"
          className={`bg-dark-grey absolute top-2 right-2 inline-block rounded-full p-1.5 ${
            isLoading ? "" : "hover:bg-light-grey"
          }`}
          disabled={!canSend || isLoading}
        >
          {isLoading ? <ThreeDots /> : <SendIcon />}
        </button>
      </div>
    </form>
  );
}
