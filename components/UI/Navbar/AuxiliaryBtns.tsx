import s from "./AuxiliaryBtns.module.css";
import LoginIcon from "@/components/Icons/LoginIcon";
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon";

export default function AuxiliaryBtns() {
  return (
    <div className={s.container} style={{ borderColor: "white" }}>
      <button className={s.login}>
        <LoginIcon className={s.userIcon} />
        Log in
        <ChevronDownIcon className={s.chevronDownIcon} />
      </button>
      <button className={s.askforfree}>Ask for Free</button>
    </div>
  );
}
