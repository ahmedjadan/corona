import styles from './countryTable.module.css';
import { useRef } from 'react';
import Country from './Country';
import { List, AutoSizer } from 'react-virtualized';
export default function CountryTable({ tableData }) {
  const orderedCountry = tableData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  return (
    <div>
      <div className={styles.table__head}>
        <button className={styles.head__name}>الدولة</button>
        <button className={styles.head__cases}>اجمالي الحالات</button>
        <button className={styles.head__new}>حالات جديدة</button>
        <button className={styles.head__deaths}>وفيات</button>
        <button className={styles.head__new__deaths}>وفيات جديدة</button>
        <button className={styles.head__recovered}>تعافي</button>
      </div>
      <div>
        {orderedCountry.map((country) => (
          <Country key={country.country} country={country} />
        ))}
      </div>
      {/* <div style={{ width: '100%', height: '100vh' }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={100}
              rowCount={tableData.length}
              rowRenderer={({ key, index, style, parent }) => {
                return (
                  <div key={key}>
                    {orderedCountry.map((country) => (
                      <Country key={country.country} country={country} />
                    ))}
                  </div>
                );
              }}
            />
          )}
        </AutoSizer>
      </div> */}
    </div>
  );
}
