import styles from "./MainCards.module.css";
import Skeleton from 'react-loading-skeleton';

export default function MainCards({ mainData }) {
  const {
    cases,
    deaths,
    todayCases,
    todayDeaths,
    recovered,
    todayRecovered,
    active,
    critical,
  } = mainData;
  return (
    <div className={styles.cards__coontainer}>
      <div className={styles.card}>
        <div className={styles.card__title}> حالات مؤكدة </div>
        <div className={`${styles.card__value} ${styles.card__cases}`}>
          {cases && cases.toLocaleString()}
        </div>
        <div className={styles.card__new_value}>

          <svg xmlns="http://www.w3.org/2000/svg" width="28" className={styles.arrow_up} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 15l-6 -6l-6 6h12" />
          </svg>
          {Math.abs(todayCases) > 999999
            ? Math.sign(todayCases) * (Math.abs(todayCases) / 1000000).toFixed(2) +
            "M"
            : Math.sign(todayCases) * (Math.abs(todayCases) /1000).toFixed(1)  }
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card__title}> وفيات مؤكدة </div>
        <div className={`${styles.card__value} ${styles.card__deaths}`}>
          {deaths.toLocaleString() || <Skeleton duration={4} count={1} height={30} />}

        </div>
        <div className={styles.card__new_value}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" className={styles.arrow_up} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 15l-6 -6l-6 6h12" />
          </svg>
          {Math.abs(todayDeaths) > 999
            ? Math.sign(todayDeaths) *
            (Math.abs(todayDeaths) / 1000).toFixed(1) +
            "k"
            : Math.sign(todayDeaths) * Math.abs(todayDeaths)}
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card__title}> حالات التعافي </div>
        <div className={`${styles.card__value} ${styles.card__recovered}`}>
          {recovered.toLocaleString()}
        </div>
        <div className={styles.card__new_value}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" className={styles.arrow_up} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 15l-6 -6l-6 6h12" />
          </svg>
          {Math.abs(todayRecovered) > 999
            ? Math.sign(todayRecovered) *
            (Math.abs(todayRecovered) / 1000).toFixed(1) +
            "k"
            : Math.sign(todayRecovered) * Math.abs(todayRecovered)}
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card__title}> حالات نشطة </div>
        <div className={`${styles.card__value} ${styles.card__active}`}>
          {active.toLocaleString()}
        </div>
        <div className={styles.card__ctitical}>
          <div>حرجة</div>
          <div className={styles.critical__value}>
            {Math.abs(critical) > 999
              ? Math.sign(critical) * (Math.abs(critical) / 1000).toFixed(1) +
              "k"
              : Math.sign(critical) * Math.abs(critical)}
          </div>
        </div>
      </div>
    </div>
  );
}
