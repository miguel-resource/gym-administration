import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Gym Admin Lite
        </title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
