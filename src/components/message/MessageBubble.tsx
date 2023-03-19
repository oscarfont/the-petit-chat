import { Arimo } from "next/font/google";
import { MESSAGE_ROLE } from "./MessageRole";
const arimo = Arimo({ subsets: ["latin"] });

export default function MessageBubble({
  id,
  content,
  role,
}: {
  id: string;
  content: string;
  role: MESSAGE_ROLE;
}) {
  const bubbleStyle =
    role === MESSAGE_ROLE.ASSISTANT
      ? `ml-2 py-3 px-4 bg-dark-grey rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white ${arimo.className}`
      : `ml-2 py-3 px-4 bg-light-grey rounded-bl-3xl rounded-tl-xl rounded-tr-3xl text-black ${arimo.className}`;
  const bubbleContainerStyle =
    role === MESSAGE_ROLE.ASSISTANT
      ? "mb-4 flex justify-start"
      : "mb-4 flex justify-end";
  return (
    <div className={bubbleContainerStyle} key={id}>
      {role === MESSAGE_ROLE.ASSISTANT ? (
        <span className="felx-col flex min-w-fit items-end">
          <img
            src="/the-petit-chat-avatar.webp"
            className="h-10 w-10 rounded-full object-cover"
            alt="El avatar del asistente virtual The Petit Chat"
          />
        </span>
      ) : (
        <></>
      )}
      <div className={bubbleStyle}> {content} </div>
    </div>
  );
}
