import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from './SearchInput.module.css'


export default function SearchInput({...rest}) {

    return (
      <div className={styles.input__container}>
        <SearchRounded className={styles.search__icon} fontSize="small"/>
        <input className={styles.input__feild} {...rest} />
      </div>
    );
}

