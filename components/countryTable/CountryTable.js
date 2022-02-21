import styles from './countryTable.module.css';
import { useCallback, useState, memo } from 'react';
import Country from './Country';
import { FixedSizeList, areEqual } from 'react-window';
import SearchInput from '../SearchInput/SearchInput';

export default function CountryTable({ tableData }) {
  const width = '100%';

  const Row = memo(
    ({ index, style }) => {
      const { country, todayDeaths, recovered, deaths, todayCases, cases } =
        tableData[index] || {};
      return (
        <div style={style}>
          <Country
            country={country}
            cases={cases}
            recovered={recovered}
            todayCases={todayCases}
            deaths={deaths}
            todayDeaths={todayDeaths}
            key={country}
          />
        </div>
      );
    },

    areEqual
  );

  return (
    <>
      <div className={styles.table__head}>
        <button className={styles.head__name}>الدولة</button>
        <button className={styles.head__cases}>اجمالي الحالات</button>
        <button className={styles.head__new}>حالات جديدة</button>
        <button className={styles.head__deaths}>وفيات</button>
        <button className={styles.head__new__deaths}>وفيات جديدة</button>
        <button className={styles.head__recovered}>تعافي</button>
      </div>

      <div style={{ width: '100%' }}>
        <FixedSizeList
          height={600}
          width={width}
          itemSize={67}
          itemCount={tableData.length}
        >
          {Row}
        </FixedSizeList>
      </div>
    </>
  );
}
