import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
<>
<Head>
        <title>Tailwind App</title>
        <meta name="description" content="Tailwind app created by Abhishek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Component {...pageProps} />
</>
    )
}

export default MyApp
