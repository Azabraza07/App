import type { AppProps } from "next/app";
import Head from "next/head";
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <Component {...pageProps} />
    </>
  );
}
