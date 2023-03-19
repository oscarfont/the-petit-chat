import { useContext, useState } from "react";
import { ChatContext } from "../chat/ChatProvider";
import { SendIcon } from "../Icons";

export default function Input() {
    const [userMessage, setUserMessage] = useState<string>("");
    const { messages, addMessage } = useContext(ChatContext);

    const sumbitMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addMessage(userMessage);
    };

    const handleMessageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const userMessage = event.target.value;
        setUserMessage(userMessage);
    };

    return (
        <form onSubmit={sumbitMessage}>
            <div className="relative block">
                <input className="w-full p-4 rounded-2xl" placeholder="Escribe aquí tu mensaje..." type="text" value={userMessage} onChange={handleMessageChange}/>
                <button type="submit" className="absolute top-2 right-2 rounded-full bg-dark-grey p-1.5">
                    <SendIcon />
                </button>
            </div>
        </form>
    )
  }