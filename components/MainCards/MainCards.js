import styles from "./MainCards.module.css";
import AddIcon from "@material-ui/icons/Add";

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
          <AddIcon className={styles.arrow_up} />
          {Math.abs(todayCases) > 999
            ? Math.sign(todayCases) * (Math.abs(todayCases) / 1000).toFixed(1) +
              "k"
            : Math.sign(todayCases) * Math.abs(todayCases)}
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card__title}> وفيات مؤكدة </div>
        <div className={`${styles.card__value} ${styles.card__deaths}`}>
          {deaths.toLocaleString()}
        </div>
        <div className={styles.card__new_value}>
          <AddIcon className={styles.arrow_up} />
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
          <AddIcon className={styles.arrow_up} />
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
