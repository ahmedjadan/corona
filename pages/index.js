import Head from "next/head";
import { useState, useEffect } from "react";
import CountryTable from "../components/countryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import MainCards from "../components/MainCards/MainCards";
import SearchInput from "../components/SearchInput/SearchInput";
import KeyboardArrowUpSharpIcon from "@material-ui/icons/KeyboardArrowUpSharp";
import styles from "../styles/Home.module.css";

export default function Home({ HomeData, tableData }) {
  const [keyword, setKeyword] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);
  const filteredCountry = tableData.filter((country) =>
    country.country.toLowerCase().includes(keyword)
  );
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
  return (
    <Layout cardsdata={HomeData}>

      <div className={styles.updated}>
          {new Date(HomeData.updated).toLocaleTimeString("en-US")}: آخر تحديث
          للبيانات
        </div>
      <div className={styles.cards}>
        <MainCards mainData={HomeData} />
      </div>
      <div>
        <SearchInput
          placeholder="ابحث باسم الدولة ...."
          onChange={handleSearch}
        />
      </div>
      <div
        className={scrollToTop ? "toTop active__scroll" : "toTop"}
        onClick={() => window.scroll(0, 0)}
      >
        <KeyboardArrowUpSharpIcon
          fontSize="large"
          className="keyboard_arrow_up"
        />
      </div>
      <CountryTable tableData={filteredCountry} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/all");
  const data = await fetch("https://disease.sh/v3/covid-19/countries");
  const HomeData = await res.json();
  const tableData = await data.json();
  return {
    props: {
      HomeData,
      tableData,
    },
  };
};
