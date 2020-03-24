import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#303342" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Prompt:200,300,400&display=swap&subset=thai"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>
          <link href="/static/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
