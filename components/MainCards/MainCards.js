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
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow_up} width="25" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>          {Math.abs(todayCases) > 999
            ? Math.sign(todayCases) * (Math.abs(todayCases) / 1000).toFixed(1) +
            "k"
            : Math.sign(todayCases) * Math.abs(todayCases)}
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card__title}> وفيات مؤكدة </div>
        <div className={`${styles.card__value} ${styles.card__deaths}`}>
          {deaths.toLocaleString() || <Skeleton duration={4} count={1} height={30} />}

        </div>
        <div className={styles.card__new_value}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow_up} width="25" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
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
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow_up} width="25" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
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
