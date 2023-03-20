import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Chat from "@/components/chat/Chat";
import { ChatProvider } from "@/components/chat/ChatProvider";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Petit Chat</title>
        <meta
          name="description"
          content="AI Virtual Assitant chat web app for The Petit Palace Hotel clients"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-color flex justify-center">
        <ChatProvider>
          <Chat />
        </ChatProvider>
      </main>
    </>
  );
}
