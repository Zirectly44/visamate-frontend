import styles from "./SearchBox.module.css";
import Image from "next/image";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// const coffeeLookup: IconLookup = {
//   prefix: "fas",
//   iconName: "magnifying-glass",
// };
// const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

const SearchBar = () => {
  return (
    <div className={styles.inputWrap}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
      {/* <label htmlFor="product-search" className={styles.inputLabel}>
        Product Search
      </label> */}
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
