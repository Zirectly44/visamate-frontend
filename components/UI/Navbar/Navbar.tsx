import AuxiliaryBtns from "./AuxiliaryBtns";
import s from "./Navbar.module.css";
import SearchBar from "./SearchBox";

export default function Navbar() {
  return (
    <div className={s.navbar}>
      <SearchBar />
      <AuxiliaryBtns />
    </div>
  );
}
