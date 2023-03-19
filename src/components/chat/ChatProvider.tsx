import { createContext, FC, ReactNode, useState } from "react";
import { MESSAGE_ROLE } from "../message/MessageRole";
import { Message } from "./Message";

interface ChatContextType {
  messages: Message[];
  isLoading: boolean;
  addMessage: (message: Message) => void;
  setLoading: (loading: boolean) => void;
}

interface ChatProviderProps {
  children: React.ReactNode;
}

export const currentTime = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes}`;
};

const initialAssistantMessage: Message = {
  id: "73e73881-c27d-44f6-90ab-35c3d3919ba0",
  content:
    "¡Hola Petit Traveller! Soy el asistente de los hoteles Petit Palace. ¡Pregúntame lo que quieras! Estoy aquí para ayudarte.",
  role: MESSAGE_ROLE.ASSISTANT,
  time: currentTime(),
};

export const ChatContext = createContext<ChatContextType>({
  messages: [],
  isLoading: false,
  addMessage: () => {},
  setLoading: () => {},
});

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    initialAssistantMessage,
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, isLoading, setLoading }}
    >
      {children}
    </ChatContext.Provider>
  );
};
