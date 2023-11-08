import AuxiliaryBtns from "./AuxiliaryBtns";
import s from "./Navbar.module.css";
import SearchBar from "./SearchBox";
import Image from "next/image";
import logo from "@/assets/competitors/LOGO.png"

export default function Navbar() {
  return (
    <div className={s.navbar}>
      <Image src={logo} alt="logo"/>
      <SearchBar />
      <AuxiliaryBtns />
    </div>
  );
}
