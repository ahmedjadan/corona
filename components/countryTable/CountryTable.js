import styles from './countryTable.module.css';
import Country from './Country';

export default function CountryTable({ tableData }) {
  const orderedCountry = tableData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
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
      {
        orderedCountry.map((country) => <Country key={country.country} country={country} tableData={tableData} />)}
    </div>
  );
}
