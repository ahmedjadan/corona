import Head from "../components/Head";
import { useState, useEffect } from "react";
import fetcher from '../lib/fetcher'
import CountryTable from "../components/countryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import MainCards from "../components/MainCards/MainCards";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

// const fetcher = url => axios.get(url).then(res => res.data)
const URL = "https://disease.sh/v3/covid-19/all"


export default function Home({ tableData, fallbackData, HomeData }) {

  // const { data, error } = useSWR(URL, fetcher, { fallbackData, refreshInterval: 6000, })
  const [keyword, setKeyword] = useState("");
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
    window.addEventListener("scroll", showScroll);
  }, [scrollToTop]);


  // const { data: tableData, error: err } = useSWR('https://disease.sh/v3/covid-19/countries', fetcher, { refreshInterval: 1000 })
  const filteredCountry = tableData?.filter((country) =>
    country.country.toLowerCase().includes(keyword)
  );

  if (!HomeData) {
    return <div>Loading....</div>
  }
  return (
    <Layout cardsdata={HomeData}>
      <Head image="https://corona-ar.vercel.app/socialmediameta.png" title="منصة كورونا بالعربي | تابع حالات فيروس كورونا لحظة بلحظة" />
      <div className={styles.updated}>
        آخر تحديث للبيانات :{" "}
        {new Date(HomeData?.updated).toLocaleTimeString("en-US")}
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
        className={scrollToTop ? "toTop active__scroll" : "toTop"}
        onClick={() => window.scroll(0, 0)}
      >

        <svg xmlns="http://www.w3.org/2000/svg" className="keyboard_arrow_up" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </div>
      <CountryTable tableData={filteredCountry} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/all");
  const HomeData = await res.json();
  const data = await fetcher(URL)

  const datatable = await fetch("https://disease.sh/v3/covid-19/countries");
  const tableData = await datatable.json();
  return {
    props: {

      tableData, fallbackData: data, HomeData
    },

  };
};
