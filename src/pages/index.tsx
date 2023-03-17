import Head from 'next/head'
import { Arimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
      <main>
        <h1 className={arimo.className}>Hello world!</h1>
      </main>
    </>
  )
}
