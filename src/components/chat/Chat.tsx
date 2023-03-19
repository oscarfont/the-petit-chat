import { useContext, useEffect } from "react";
import Header from "../header/Header";
import Input from "../input/Input";
import MessageBubble from "../message/MessageBubble";
import { ChatContext } from "./ChatProvider";

export default function Chat() {

    const { messages } = useContext(ChatContext);

    return (
        <section className="w-full max-w-lg h-screen flex flex-col px-2 border-solid border-2 border-red-800">
            <Header />
            <div className="w-full h-full border-solid border-2 border-red-800 p-4">
                {messages.map((message: string, index: number) => (
                    <MessageBubble id={index} content={message}/>
                ))}
            </div>
            <Input />
        </section>
    )
}