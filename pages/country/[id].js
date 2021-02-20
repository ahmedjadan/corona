import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";

import styles from "./country.module.css";

const Country = ({ country }) => {
  return (
    <Layout title={`منصة كورونا بالعربي | ${country.country}`}>
      <Head>
        <meta
          property="og:description"
          content={` ${country.country} آخر احصائيات حالات فيروس كورونا في  `}
        />
        <meta property="og:image" content={country.countryInfo.flag}  />
      </Head>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <Image
            src={country.countryInfo.flag}
            alt={country.country}
            layout="intrinsic"
            width={900}
            height={475}
          />
          <div  className={styles.left__wrapper}>
               <div className={styles.name__lable}>
                 <div>اسم الدولة</div>
              <div> {country.country} </div>
            </div>
            <div className={styles.name__cases}>
              <div> عدد الحالات</div>
              <div>
                {Math.abs(country.cases) > 999999
                  ? Math.sign(country.cases) *
                      (Math.abs(country.cases) / 1000000).toFixed(2) +
                    "M"
                  : country.cases.toLocaleString()}
              </div>
            </div>
            <div className={styles.name__pop}>
              <div> عدد السكان</div>
              <div>
                {" "}
                {Math.abs(country.population) > 999999
                  ? Math.sign(country.population) *
                      (Math.abs(country.population) / 1000000).toFixed(2) +
                    "M"
                  : country.population.toLocaleString()}
              </div>
            </div>
            <div className={styles.name__region}>
              <div> القارة/ الاقليم</div>
              <div> {country.continent} </div>
            </div>
          </div>
        </div>
        <div className={styles.container__right}>
          <div className={styles.right__detailes}>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}>حالات جديدة</div>
              <div className={styles.detailes_value}>
                {country.todayCases.toLocaleString()}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}>وفيات</div>
              <div className={styles.detailes_value}>
                {country.deaths.toLocaleString()}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}>وفيات جديدة</div>
              <div className={styles.detailes_value}>
                {country.todayDeaths.toLocaleString()}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}> حالات نشطة </div>
              <div className={styles.detailes_value}>
                {Math.abs(country.active) > 999999
                  ? Math.sign(country.active) *
                      (Math.abs(country.active) / 1000000).toFixed(2) +
                    "M"
                  : country.active.toLocaleString()}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}> حالات حرجة </div>
              <div className={styles.detailes_value}>
                {country.critical.toLocaleString()}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}> تعافي</div>
              <div className={styles.detailes_value}>
                {Math.abs(country.recovered) > 999999
                  ? Math.sign(country.recovered) *
                      (Math.abs(country.recovered) / 1000000).toFixed(2) +
                    "M"
                  : country.recovered.toLocaleString()}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}> تعافي جديد</div>
              <div className={styles.detailes_value}>
                {country.todayRecovered}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}> حالة لكل 1 مليون </div>
              <div className={styles.detailes_value}>
                {country.casesPerOneMillion}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}> وفاة بين كل 1 مليون </div>
              <div className={styles.detailes_value}>
                {country.deathsPerOneMillion}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}> فحوصات </div>
              <div className={styles.detailes_value}>
                {Math.abs(country.tests) > 999999
                  ? Math.sign(country.tests) *
                      (Math.abs(country.tests) / 1000000).toFixed(2) +
                    "M"
                  : country.tests.toLocaleString()}
              </div>
            </div>
            <div className={styles.detailes_row}>
              <div className={styles.detailes_lable}>
                {" "}
                حالة تم فحصها بين كل 1 مليون{" "}
              </div>
              <div className={styles.detailes_value}>
                {Math.abs(country.testsPerOneMillion) > 999999
                  ? Math.sign(country.testsPerOneMillion) *
                      (Math.abs(country.testsPerOneMillion) / 1000000).toFixed(
                        2
                      ) +
                    "M"
                  : country.testsPerOneMillion.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Country;

// export const getCountry = async (id) => {
//   const res = await fetch(`https://disease.sh/v3/covid-19/countries/${id}`);
//   const country = await res.json();

//   return country;
// };

// export const getStaticPaths = async () => {
//   const res = await fetch("https://disease.sh/v3/covid-19/countries/");
//   const countries = await res.json();

//   const paths = countries.map((country) => ({
//     params: {
//       id: country.country.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
//     },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const country = await getCountry(params.id);

//   return {
//     props: {
//       country,
//     },
//     revalidate: 1,
//   };
// };

export const getServerSideProps = async ({params}) => {
  const res = await fetch(`https://disease.sh/v3/covid-19/countries/${params.id}`)
  const country = await res.json()

  return {
    props: {
      country
    }
  }
}