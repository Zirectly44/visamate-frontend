import s from "./AuxiliaryBtns.module.css";
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon";
import UserIcon from "@/components/Icons/UserIcon";


export default function AuxiliaryBtns() {
  return (
    <div className={s.container} style={{ borderColor: "white" }}>
      <button className={s.login}>
        <UserIcon className={s.userIcon} />
        Log in
        <ChevronDownIcon className={s.chevronDownIcon} />
      </button>
    </div>
  );
}
