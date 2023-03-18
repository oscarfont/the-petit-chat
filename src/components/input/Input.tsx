import { SendIcon } from "../Icons";

export default function Input() {
    return (
        <form>
            <div className="relative block">
                <input className="w-full p-2 rounded-2xl" placeholder="Escribe aquí tu mensaje..." type="text"/>
                <button type="submit">
                    <SendIcon />
                </button>
            </div>
        </form>
    )
  }