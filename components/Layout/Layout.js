import Head from '../Head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';

function Layout({ children, title = 'منصة كورونا بالعربي' }) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    );

    setTheme(localStorage.getItem('theme'));
  }, []);

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark');
    } else {
      saveTheme('light');
    }
  };


  function refreshPage() {
    //window.location.reload(false);
    window.parent.location = window.parent.location.href = '/';
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button style={{ outline: 'none' }}
          aria-label="Toggle Dark Mode"
          type="button"
          className={styles.theme__swicher}
          onClick={switchTheme}
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className={styles.svg}
          >
            {theme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>

        </button>
        <Link href="/">
          <a onClick={refreshPage}>
            <div className={styles.title}>
              {' '}
              منصة كوفيــد-19 بالعربي
              <img src="/virus.svg" alt="logo" width="60" height="100" />
            </div>
          </a>
        </Link>
      </header>
      <main className={styles.main}> {children} </main>
      <footer className={styles.footer}>
        <a
          href="https://ahmedjadan.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ahmed Ja'dan &copy;
        </a>{' '}
      </footer>
    </div>
  );
}

export default Layout;
