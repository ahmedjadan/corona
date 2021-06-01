import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from 'next/router';

import { GA_TRACKING_ID } from "../lib/gtag";
class MyDocument extends Document {
  
  render() {
    const router = useRouter();
    return (
      <Html lang="ar">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta
            name="description"
            content="تابع آخر احصاءات فيروس كرونا لحظة بلحظة"
          />
          <meta
            name="google-site-verification"
            content="ib58-3W8vdPzagl00oq0bEOp7vfn7Aq0BQTrBQxc47Y"
          />
          {/* <meta
            property="og:description"
            content="تابع آخر احصاءات فيروس كرونا لحظة بلحظة"
          /> */}

          {/* <meta property="og:image" content="/metaimage.PNG" /> */}
          {/* <meta name="twitter:image" content="/socialmediameta.png" /> */}
          <meta name="twitter:title" content="منصة كورونا بالعربي" />
          <meta
            name="keywords"
            content="كورونا، كوفيد19، فيروس كورونا التاجي، حالات كورونا في العالم العربي ، حالات كورونا في اليمن، السعودية، مصر، الامارات، قطر، البحرين، الكويت، السودان، العراق، سوريا، فلسطين، المغرب العربي، موريتانيا، ليبيا"
          />
          <link rel="canonical" href={`https://corona-ar.vercel.app${router.asPath}`} />
          <meta key="image" property="image" content="https://corona-ar.vercel.app/socialmediameta.png" />
          <meta property="og:title" content="منصة كورونا بالعربي" />
          <meta property="og:description" content="تابع آخر احصاءات فيروس كرونا لحظة بلحظة"/>
          <meta property="og:image" content="https://corona-ar.vercel.app/socialmediameta.png" />

          <meta property="og:image" content="https://corona-ar.vercel.app/socialmediameta.png" />
          <meta property="og:url" content="https://corona-ar.vercel.app" />
          <meta property="og:url" content={`https://corona-ar.vercel.app${router.asPath}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="website" />
          <meta property="twitter:domain" content="corona-ar.vercel.app" />
          <meta key="twitter:image" name="twitter:image" content="https://corona-ar.vercel.app/socialmediameta.png" />
      <meta property="twitter:image"  content="https://corona-ar.vercel.app/socialmediameta.png" /> 
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@a7medjadan" />
          <meta name="twitter:creator" content="@a7medjadan" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
