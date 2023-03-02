import Head from "next/head";
import Image from "next/image";

import Form1 from "../components/Form1"
import Brandon from "../components/Brandon"
// import Thing from "../components/Thing"

export default function Home() {
  return (
    <> 
      <code className="block">index</code>
      <Head>
        <title>B:H</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form1 />
        {/* <Thing /> */}
        <Brandon />
      </main>
    </>
  );
}
