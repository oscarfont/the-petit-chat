import { createContext, FC, ReactNode, useState } from "react";

interface ChatContextType {
  messages: string[];
  addMessage: (message: string) => void;
}

interface ChatProviderProps {
    children: React.ReactNode;
}

export const ChatContext = createContext<ChatContextType>({
  messages: [],
  addMessage: () => {},
});

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<string[]>(['¡Hola Petit Traveller! Soy el asistente de los hoteles Petit Palace. ¡Pregúntame lo que quieras! Estoy aquí apra ayudarte.']);

  const addMessage = (newMessage: string) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
