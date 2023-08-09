import CookieConsent from '@/src/small/CookieConsent/CookieConsent'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>

    </Head>
    <Component {...pageProps} />
    <CookieConsent />
  </>
}
