import { useContext, useEffect } from "react";
import Header from "../header/Header";
import Input from "../input/Input";
import { ChatContext } from "./ChatProvider";

export default function Chat() {

    const { messages } = useContext(ChatContext);

    return (
        <section className="w-full max-w-lg h-screen flex flex-col px-2 border-solid border-2 border-red-800">
            <Header />
            <div className="w-full h-full border-solid border-2 border-red-800">
                {messages.map((message) => (
                    <div key={message}>{message}</div>
                ))}
            </div>
            <Input />
        </section>
    )
}