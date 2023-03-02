import "@/styles/tailwind.css"
import React, { useEffect } from "react"
import type { AppProps } from "next/app"
import { Inter } from "@next/font/google"

import Layout from '../components/layout'

// import TagManager from 'react-gtm-module'
// const tagManagerArgs = {
//   gtmId: 'G-EXS0MQ7FQY'
// }

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  
  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs)
  // }, [])

  return (
    <div className={`${interFont.variable} font-sans`}>
      <Layout>
        <code>_app</code>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
 