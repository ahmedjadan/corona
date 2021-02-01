import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function Layout({ children, cardsdata }) {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    if(theme === 'light'){
      document.documentElement.setAttribute('data-theme', 'dark')
      setTheme('dark')
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>كوفيد19</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className={styles.header}>
        <Link href="/">
        <div className={styles.title}> منصة كورونا بالعربي | كوفيد -19</div>
        </Link>
        <button
          aria-label="change color theme"
          className={styles.theme__swicher}
          onClick={switchTheme}
        >
          <Brightness4Icon />
        </button>
      </header>

      <main className={styles.main}> {children} </main>

      <footer className={styles.footer}> &copy; Ahmed Ja'dan </footer>
    </div>
  );
}

export default Layout;
