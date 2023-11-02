import MagnifyingGlassIcon from "@/components/Icons/MagnifyingGlassIcon";
import styles from "./SearchBox.module.css";

const SearchBar = () => {
  return (
    <div className={styles.inputWrap}>
      <MagnifyingGlassIcon className={styles.searchIcon}/>
      <input
        type="text"
        name="product-search"
        className={styles.productSearch}
        placeholder="Where are you going?"
      />
      <button className={styles.button}>Search</button>
    </div>
  );
};

export default SearchBar;
