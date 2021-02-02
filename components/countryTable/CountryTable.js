import Link from "next/link";
import styles from "./countryTable.module.css";

export default function CountryTable({ tableData }) {
  return (
    <div>
      <div className={styles.table__head}>
        <button className={styles.head__name}>الدولة</button>
        <button className={styles.head__cases}>اجمالي الحالات</button>
        <button className={styles.head__new}>حالات جديدة</button>
        <button className={styles.head__deaths}>وفيات</button>
        <button className={styles.head__active}>وفيات جديدة</button>
        <button className={styles.head__recovered}>تعافي</button>
      </div>
      {tableData &&
        tableData.map((country) => (
          <Link
            href={`/country/${country.country
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              }`}
            key={country.country}
          >
            <div className={styles.country__row}>
              <div className={styles.country__name}> {country.country} </div>
              <div className={styles.country__cases}>
                {" "}
                {country.cases.toLocaleString()}{" "}
              </div>
              <div className={styles.country__new}>
                <div
                  className={`${styles.country__new}  ${
                    country.todayCases ? styles.new__cases : ""
                  } `}
                >
                  {country.todayCases.toLocaleString()}{" "}
                </div>
              </div>
              <div className={styles.country__deaths}>
                {" "}
                {country.deaths.toLocaleString()}{" "}
              </div>
              <div className={styles.country__active}>
                {" "}
                <div
                  className={`${styles.country__active}  ${
                    country.todayDeaths ? styles.new__deaths : ""
                  } `}
                >
                  {country.todayDeaths.toLocaleString()}{" "}
                </div>
              </div>
              <div className={styles.country__recovered}>
                {country.recovered.toLocaleString()}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
