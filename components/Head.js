import NextHead from 'next/head';
import { useRouter } from 'next/router';

export default function Head({ children, title, description, keywords, url, date, image }) {
    const router = useRouter();
    return (
        <NextHead>
            <meta
            name="description"
            content="تابع آخر احصاءات فيروس كرونا لحظة بلحظة"
          />
          <meta
            name="google-site-verification"
            content="ib58-3W8vdPzagl00oq0bEOp7vfn7Aq0BQTrBQxc47Y"
          />
         
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
        </NextHead>
    )
}
