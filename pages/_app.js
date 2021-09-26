import '../styles/globals.css'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
//const fetcher = (url) => fetch(url).then((res) => res.json());

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SWRConfig value={{   }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
};

export default MyApp;