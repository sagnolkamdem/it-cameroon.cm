import Head from 'next/head'
import type { AppProps } from 'next/app'

import { Dosis } from '@next/font/google'

import '../../globals.css'

const dosis = Dosis({
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dosis.className}>
      <Head>
        <title>TECH CMR</title>
        <meta name="description" content="Platform to learn more about Camer tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
