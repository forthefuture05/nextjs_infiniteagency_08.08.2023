import CookieConsent from '@/src/small/CookieConsent/CookieConsent'
import '@/styles/globals.css'
import Cookies from 'js-cookie';
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  console.log(Cookies.get("accCookies"));

  const cookieC = Cookies.get("accCookies");

  return <>
    <Head>
      <link rel='canonical' href={`https://infiniteagency.de${router.asPath}`} />
      <link rel="icon" href="https://infiniteagency.de/images/Infinite-Logo-Icon.svg" />
      <meta property="og:title" content="Online Marketing Agentur aus München | Infinite Agency" />
      <meta property="og:description" content="Professionelles Webdesign, SEO & SMM für digitales Wachstum. Kreative Lösungen, die beeindrucken. Entdecken Sie unsere Agentur aus München." />
      <meta property="og:image" content="https://infiniteagency.de/images/infiniteLogo.png" />
      <meta property="og:url" content="https://infiniteagency.de" />
      <meta property="og:site_name" content="Infinite Agency" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11377149020"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'AW-11377149020');
        `}
      </script>


      {/* Infinite Agency */}

      {cookieC === "accepted" ? <>
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
      </> : <></>}
    </Head>
    <Component {...pageProps} />
    <CookieConsent />
  </>
}
