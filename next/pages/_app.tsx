import type { AppProps } from 'next/app';
import Head from 'next/head';
import "@/global.css";
import NavBar from '@/components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sample React App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lion.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
