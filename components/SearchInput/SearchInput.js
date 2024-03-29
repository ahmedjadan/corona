import styles from './SearchInput.module.css'


export default function SearchInput({ ...rest }) {

  return (
    <div className={styles.input__container}>
      {/* <SearchRounded className={styles.search__icon} width="10" height="10" fontSize="small" /> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  className="search__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input className={styles.input__feild} {...rest} />
    </div>
  );
}

