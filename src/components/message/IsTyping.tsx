import { LoadingDot } from "../Icons";

export default function IsTyping() {
  const dotColor = "var(--dark-gray)";
  return (
    <div className="mb-4 flex justify-start">
      <span className="flex min-w-fit flex-col items-end">
        <img
          src="/the-petit-chat-avatar.webp"
          className="h-10 w-10 rounded-full object-cover"
          alt="El avatar del asistente virtual The Petit Chat"
        />
      </span>
      <span className="flex pl-4 pt-2">
        <LoadingDot color={dotColor} animation={"dot animation-delay-1"} />
        <LoadingDot color={dotColor} animation={"dot animation-delay-2"} />
        <LoadingDot color={dotColor} animation={"dot animation-delay-3"} />
      </span>
    </div>
  );
}
