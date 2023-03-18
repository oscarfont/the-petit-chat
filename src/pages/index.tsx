import Head from 'next/head'
import { Arimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Chat from '@/components/chat/Chat';

const arimo = Arimo({subsets:['latin']});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="AI Virtual Assitant chat web app for The Petit Palace Hotel clients"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <Chat />
      </main>
    </>
  )
}
