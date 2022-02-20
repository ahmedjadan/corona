import Link from 'next/link';
import styles from './countryTable.module.css';

const Country = ({ country }) => {
  return (
    <Link
      href={`/country/${country.country
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')}`}
    >
      <div className={styles.country__row}>
        <div className={styles.country__name}> {country.country} </div>
        <div className={styles.country__cases}>
          {' '}
          {Math.abs(country.cases) > 999999
            ? Math.sign(country.cases) *
                (Math.abs(country.cases) / 1000000).toFixed(3) +
              'M'
            : country.cases.toLocaleString()}
        </div>
        <div className={styles.country__new}>
          <div
            className={`${styles.country__new}  ${
              country.todayCases ? styles.new__cases : ''
            } `}
          >
            {Math.abs(country.todayCases) > 999999
              ? Math.sign(country.todayCases) *
                  (Math.abs(country.todayCases) / 1000000).toFixed(3) +
                'M'
              : country.todayCases.toLocaleString()}
          </div>
        </div>
        <div className={styles.country__deaths}>
          {Math.abs(country.deaths) > 999999
            ? Math.sign(country.deaths) *
                (Math.abs(country.deaths) / 1000000).toFixed(3) +
              'M'
            : country.deaths.toLocaleString()}
        </div>
        <div className={styles.country__today__deaths}>
          <div
            className={`${styles.country__today__deaths}  ${
              country.todayDeaths ? styles.new__deaths : ''
            } `}
          >
            {country.todayDeaths.toLocaleString()}{' '}
          </div>
        </div>
        <div className={styles.country__recovered}>
          {Math.abs(country.recovered) > 999999
            ? Math.sign(country.recovered) *
                (Math.abs(country.recovered) / 1000000).toFixed(2) +
              'M'
            : country.recovered.toLocaleString()}
        </div>
      </div>
    </Link>
  );
};

export default Country;

/*
 */
