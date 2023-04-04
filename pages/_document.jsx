import { Html, Head, Main, NextScript } from 'next/document'
import React, { useEffect } from "react"

// import TagManager from 'react-gtm-module'
// const tagManagerArgs = {
//   gtmId: 'G-EXS0MQ7FQY'
// }
 
export default function Document() {
  // useEffect(() => {
  //     TagManager.initialize(tagManagerArgs)
  // }, []) 
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
