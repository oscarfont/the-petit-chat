import { SendIcon } from "../Icons";

export default function Input() {
    return (
        <form>
            <div className="relative block">
                <input className="w-full p-4 rounded-2xl" placeholder="Escribe aquí tu mensaje..." type="text"/>
                <button type="submit" className="absolute top-2 right-2 rounded-full bg-dark-grey p-1.5">
                    <SendIcon />
                </button>
            </div>
        </form>
    )
  }