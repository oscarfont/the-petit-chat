import Header from "../header/Header";
import Input from "../input/Input";

export default function Chat() {
    return (
    <section className="w-full max-w-lg h-screen flex flex-col px-2 border-solid border-2 border-red-800">
        <Header />
        <div className="w-full h-full border-solid border-2 border-red-800">
            Messages Placeholder
        </div>
        <Input />
    </section>
    )
}