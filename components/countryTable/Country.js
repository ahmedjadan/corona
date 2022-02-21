import Link from 'next/link';
import styles from './countryTable.module.css';

const Country = ({
  country,
  todayDeaths,
  recovered,
  deaths,
  todayCases,
  cases,
}) => {
  return (
    <Link
      href={`/country/${country
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')}`}
    >
      <div className={styles.country__row}>
        <div className={styles.country__recovered}>
          {Math.abs(recovered) > 999999
            ? Math.sign(recovered) *
                (Math.abs(recovered) / 1000000).toFixed(2) +
              'M'
            : recovered.toLocaleString()}
        </div>
        <div className={styles.country__today__deaths}>
          <div
            className={`${styles.country__today__deaths}  ${
              todayDeaths ? styles.new__deaths : ''
            } `}
          >
            {todayDeaths.toLocaleString()}{' '}
          </div>
        </div>
        <div className={styles.country__deaths}>
          {Math.abs(deaths) > 999999
            ? Math.sign(deaths) * (Math.abs(deaths) / 1000000).toFixed(3) + 'M'
            : deaths.toLocaleString()}
        </div>
        <div className={styles.country__new}>
          <div
            className={`${styles.country__new}  ${
              todayCases ? styles.new__cases : ''
            } `}
          >
            {Math.abs(todayCases) > 999999
              ? Math.sign(todayCases) *
                  (Math.abs(todayCases) / 1000000).toFixed(3) +
                'M'
              : todayCases.toLocaleString()}
          </div>
        </div>
        <div className={styles.country__cases}>
          {' '}
          {Math.abs(cases) > 999999
            ? Math.sign(cases) * (Math.abs(cases) / 1000000).toFixed(3) + 'M'
            : cases.toLocaleString()}
        </div>
        <div className={styles.country__name}> {country} </div>
      </div>
    </Link>
  );
};

export default Country;

/*
 */
