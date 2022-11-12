import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
<>
<Head>
        <title>Tailwind App</title>
        <meta name="description" content="Tailwind app created by Abhishek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Link href='/'>      <div className='bg-black text-white text-center text-7xl py-4 '>Tailwind</div> </Link>
<Component {...pageProps} />
</>
    )
}

export default MyApp
