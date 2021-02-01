import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from './SearchInput.module.css'


export default function SearchInput({...rest}) {
    return (
      <div className={styles.input__container}>
        <input className={styles.input__feild} {...rest} />
        <SearchRounded />
      </div>
    );
}

