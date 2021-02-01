import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import styles from "./country.module.css";


const Country = ({ country }) => {
  return (
    <Layout>
      <Link href="/">Home</Link>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <img src={country.countryInfo.flag} alt="" width="200" height="200" />
          <div className={styles.left__wrapper}>
            <div className={styles.name__lable}>
              <div> {country.country} </div>
              <div>اسم الدولة</div>
            </div>
            <div className={styles.name__cases}>
              <div> {country.cases} </div>
              <div> عدد الحالات</div>
            </div>
            <div className={styles.name__pop}>
              <div> {country.population} </div>
              <div> عدد السكان</div>
            </div>
            <div className={styles.name__region}>
              <div> {country.continent} </div>
              <div> القارة/ الاقليم</div>
            </div>
          </div>
        </div>
        <div className={styles.container__right}>
          <div className={styles.right__detailes}>

            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.todayCases}</div>
              <div className={styles.detailes_lable}>حالات جديدة</div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.deaths}</div>
              <div className={styles.detailes_lable}>وفيات</div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.todayDeaths}</div>
              <div className={styles.detailes_lable}>وفيات جديدة</div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.active}</div>
              <div className={styles.detailes_lable}>  حالات نشطة </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.critical}</div>
              <div className={styles.detailes_lable}>  حالات حرجة </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.recovered}</div>
              <div className={styles.detailes_lable}> تعافي</div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.todayRecovered}</div>
              <div className={styles.detailes_lable}>  تعافي جديد</div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.tests}</div>
              <div className={styles.detailes_lable}>  فحوصات </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.tests}</div>
              <div className={styles.detailes_lable}>  فحوصات </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_value}>{country.tests}</div>
              <div className={styles.detailes_lable}>  فحوصات </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Country;


//  "cases": 2121,
//   "todayCases": 0,
//   "deaths": 615,
//   "todayDeaths": 0,
//   "recovered": 1426,
//   "todayRecovered": 0,
//   "active": 80,
//   "critical": 23,
//   "casesPerOneMillion": 70,
//   "deathsPerOneMillion": 20,
//   "tests": 17404,
//   "testsPerOneMillion": 576,
//   "population": 30207109,
//   "continent": "Asia",
//   "oneCasePerPeople": 14242,
//   "oneDeathPerPeople": 49117,
//   "oneTestPerPeople": 1736,
//   "activePerOneMillion": 2.65,
//   "recoveredPerOneMillion": 47.21,
//   "criticalPerOneMillion": 0.76
export const getCountry = async (id) => {
  const res = await fetch(`https://disease.sh/v3/covid-19/countries/${id}`);
  const country = await res.json();

  return country;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/countries/");
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { id: country.country },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const country = await getCountry(params.id);

  return {
    props: {
      country,
    },
  };
};
