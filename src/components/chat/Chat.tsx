import { useContext, useEffect } from "react";
import Header from "../header/Header";
import Input from "../input/Input";
import MessageBubble from "../message/MessageBubble";
import { MESSAGE_ROLE } from "../message/MessageRole";
import { ChatContext } from "./ChatProvider";

export default function Chat() {
  const { messages } = useContext(ChatContext);

  return (
    <section className="flex h-screen w-full max-w-lg flex-col border-2 border-solid border-red-800 px-2">
      <Header />
      <div className="h-full w-full border-2 border-solid border-red-800 p-4">
        {messages.map((message: string, index: number) => (
          <MessageBubble
            id={index}
            content={message}
            role={MESSAGE_ROLE.ASSISTANT}
          />
        ))}
      </div>
      <Input />
    </section>
  );
}
