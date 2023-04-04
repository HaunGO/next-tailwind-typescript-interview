import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head";
// import { AppProps } from "next/app"
import PageTransitions from "../components/PageTransitions"
// import Layout from '../app/Layout'
import Nav from "../components/Nav/Nav"


import "@/styles/tailwind.css"
import { Bitter } from "@next/font/google"


// import TagManager from 'react-gtm-module'
// const tagManagerArgs = {
//   gtmId: 'G-EXS0MQ7FQY'
// }

// const bitter = Bitter({ 
//     subsets: ['latin'],
//     variable: '--font-bitter', 
//   })

export default function App({ Component, pageProps } ) {
  const [routingPageOffset, setRoutingPageOffset] = useState(0)
  
  const router = useRouter();

  useEffect(() => {
    const pageChange = () => {
      setRoutingPageOffset(window.scrollY)
    }
    router.events.on('routeChangeStart', pageChange)
  },[router.events])


  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs)
  // }, [])
  // <div className={`${bitter.variable} font-serif`}>

  return (
    <>
    <Head>
      <title>B:H</title>
      <meta name="description" content="The public website for the one living man, Brandon : Haun " />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="mt-8 p-4">
      {/* <Layout> */}
        {/* <code>_app</code> */}
        <header className="fixed w-full z-50 t-0 block top-0 left-0">
          <Nav />
        </header>

        <PageTransitions route={router.asPath} routingPageOffset={routingPageOffset} >
          <Component {...pageProps} />
        </PageTransitions>
        
      {/* </Layout> */}
    </div>
    </>
  );
}
 