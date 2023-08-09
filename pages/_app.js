import CookieConsent from '@/src/small/CookieConsent/CookieConsent'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta property="og:title" content="Online Marketing Agentur aus München | Infinite Agency" />
      <meta property="og:description" content="Professionelles Webdesign, SEO & SMM für digitales Wachstum. Kreative Lösungen, die beeindrucken. Entdecken Sie unsere Agentur aus München." />
      <meta property="og:image" content="https://infiniteagency.de/images/infiniteLogo.png" />

      <script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
        `}
      </script>
    </Head>
    <Component {...pageProps} />
    <CookieConsent />
  </>
}
