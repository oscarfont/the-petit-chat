import { useContext, useEffect, useRef } from "react";
import Header from "../header/Header";
import Input from "../input/Input";
import IsTyping from "../message/IsTyping";
import MessageBubble from "../message/MessageBubble";
import { ChatContext } from "./ChatProvider";
import { Message } from "./Message";

export default function Chat() {
  const { messages, isLoading } = useContext(ChatContext);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current !== null) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="flex h-screen w-full max-w-lg flex-col border-2 border-solid border-red-800 px-2">
      <Header />
      <div
        className="scrollbar h-full w-full overflow-y-scroll border-2 border-solid border-red-800 p-4"
        ref={messageContainerRef}
      >
        {isLoading
          ? [
              messages.map((message: Message) => (
                <MessageBubble
                  id={message.id}
                  content={message.content}
                  role={message.role}
                />
              )),
              <IsTyping />,
            ]
          : messages.map((message: Message) => (
              <MessageBubble
                id={message.id}
                content={message.content}
                role={message.role}
              />
            ))}
      </div>
      <Input />
    </section>
  );
}
