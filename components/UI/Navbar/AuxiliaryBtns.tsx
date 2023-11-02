import s from "./AuxiliaryBtns.module.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export default function AuxiliaryBtns() {
  return (
    <div className={s.container} style={{ borderColor: "white" }}>
      <button className={s.login}>
        <FontAwesomeIcon className={s.userIcon} icon={faUsers} />
        Log in
        <FontAwesomeIcon className={s.chevronDownIcon} icon={faChevronDown} />
      </button>
      <button className={s.askforfree}>Ask for Free</button>
    </div>
  );
}
