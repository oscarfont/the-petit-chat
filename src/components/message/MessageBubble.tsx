export default function MessageBubble({id, content} : {id: number, content: string}) {
    return (
        <div className="flex justify-start mb-4" key={id}>
            <span className="flex felx-col items-end min-w-fit">
                <img
                src="/the-petit-chat-avatar.webp"
                className="object-cover h-10 w-10 rounded-full"
                alt="El avatar del asistente virtual The Petit Chat"
                />
            </span>
            <div
              className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              { content }
            </div>
        </div>
    )
  }