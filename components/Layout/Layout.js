import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function Layout({ children, title = "منصة كورونا بالعربي" }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };


  return (
    <div className={styles.container}>
      <Head>
        <title> {title} </title>
        <meta property="og:title" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.title}>
            {" "}
            <img src="/virus.svg" alt="logo" width="60" height="100" />
            منصة كوفيــد-19 بالعربي
          </div>
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
