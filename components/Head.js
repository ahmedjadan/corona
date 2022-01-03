import NextHead from 'next/head';
import { useRouter } from 'next/router';

export default function Head({ children, title, description, keywords, url, date, image }) {
    const router = useRouter();
    return (
        <NextHead>
         <title key="pageTitle">{title ? `${title} | منصة كورونا بالعربي` : "منصة كورونا بالعربي"} </title>

            <meta
            name="description"
            content={description}
          />
          <meta
            name="google-site-verification"
            content="ib58-3W8vdPzagl00oq0bEOp7vfn7Aq0BQTrBQxc47Y"
          />
         
          <meta name="twitter:title" content={title} />
          <meta
            name="keywords"
            content="كورونا، كوفيد19، فيروس كورونا التاجي، حالات كورونا في العالم العربي ، حالات كورونا في اليمن، السعودية، مصر، الامارات، قطر، البحرين، الكويت، السودان، العراق، سوريا، فلسطين، المغرب العربي، موريتانيا، ليبيا"
          />
          <link rel="canonical" href={`https://corona-ar.vercel.app${router.asPath}`} />
          <link rel="manifest" href="/manifest.json" />
          <meta key="image" property="image" content="https://corona-ar.vercel.app/socialmediameta.png" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description}/>
          <meta property="og:image" content={image} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content="https://corona-ar.vercel.app" />
          <meta property="og:url" content={`https://corona-ar.vercel.app${router.asPath}`} />
          <meta property="og:type" content="website" />
          <meta property="twitter:domain" content="corona-ar.vercel.app" />
          <meta key="twitter:image" name="twitter:image" content={image} />
          <meta property="twitter:image"  content={image} /> 
            <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta key="og:image:width" property="og:image:width" content="1200" />
            <meta key="og:image:height" property="og:image:height" content="630" />
          <meta name="twitter:site" content="@a7medjadan" />
          <meta name="twitter:creator" content="@a7medjadan" />
        </NextHead>
    )
}
