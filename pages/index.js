import Head from '../components/Head';
import dynamic from 'next/dynamic';

import { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import styles from '../styles/Home.module.css';
const CountryTable = dynamic(() =>
  import('../components/countryTable/CountryTable')
);
const MainCards = dynamic(() => import('../components/MainCards/MainCards'));

export default function Home({ tableData, HomeData }) {
  const [keyword, setKeyword] = useState('');
  const [scrollToTop, setScrollToTop] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  useEffect(() => {
    const showScroll = () => {
      if (window.scrollY > 700) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    window.addEventListener('scroll', showScroll);
  }, [scrollToTop]);

  const filteredCountry = tableData?.filter((country) =>
    country.country.toLowerCase().includes(keyword)
  );

  if (!HomeData) {
    return <div>Loading....</div>;
  }
  return (
    <Layout cardsdata={HomeData}>
      <Head
        image="https://corona-ar.vercel.app/socialmediameta.png"
        title="منصة كورونا بالعربي | تابع حالات فيروس كورونا لحظة بلحظة"
      />
      <div className={styles.updated}>
        آخر تحديث للبيانات :{' '}
        {new Date(HomeData?.updated).toLocaleString('en-US')}
      </div>
      <div className={styles.cards}>
        <MainCards mainData={HomeData} />
      </div>
      <div>
        <SearchInput
          placeholder="ابحث باسم الدولة ...."
          onChange={handleSearch}
          type="text"
        />
      </div>
      <div
        className={scrollToTop ? 'toTop active__scroll' : 'toTop'}
        onClick={() => window.scroll(0, 0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="keyboard_arrow_up"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <CountryTable tableData={filteredCountry} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const [res, datatable] = await Promise.all([
    fetch('https://disease.sh/v3/covid-19/all'),
    fetch('https://disease.sh/v3/covid-19/countries'),
  ]);
  const HomeData = await res.json();
  const tableData = await datatable.json();
  return {
    props: {
      tableData,
      HomeData,
    },
  };
};
