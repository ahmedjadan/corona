import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar">
        <Head>
          <meta
            name="description"
            content="تابع آخر احصاءات فيروس كرونا لحظة بلحظة"
          />
          <meta
            property="og:description"
            content="تابع آخر احصاءات فيروس كرونا لحظة بلحظة"
          />
          {/* <meta property="og:image" content="/metaimage.PNG" /> */}
          <meta name="twitter:image" content="/metaimage.PNG" />
          <meta
            name="keywords"
            content="كورونا، كوفيد19، فيروس كورونا التاجي، حالات كورونا في العالم العربي ، حالات كورونا في اليمن، السعودية، مصر، الامارات، قطر، البحرين، الكويت، السودان، العراق، سوريا، فلسطين، المغرب العربي، موريتانيا، ليبيا"
          />
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
