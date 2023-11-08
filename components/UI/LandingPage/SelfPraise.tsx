import ClockClockwiseIcon from "@/components/Icons/ClockClockwiseIcon";
import HeadsetIcon from "@/components/Icons/HeadsetIcon";
import ShieldCheckIcon from "@/components/Icons/ShieldCheckIcon";
import StarIcon from "@/components/Icons/StarIcon";
import s from "./SelfPraise.module.css";

export default function SelfPraise() {
  return (
    <div className={s.container} style={{ marginTop: 112 }}>
      <li>
        <span className={s.HeadsetIconContainer}>
          <HeadsetIcon />
        </span>
        Top Notch Support
      </li>
      <li>
        <span className={s.ClockClockwiseIconContainer}>
          <ClockClockwiseIcon />
        </span>
        Fast Processing
      </li>
      <li>
        <span className={s.ShieldCheckIconContainer}>
          <ShieldCheckIcon />
        </span>
        Money Back Guarantee
      </li>
      <li>
        <span className={s.StarIconContainer}>
          <StarIcon />
        </span>
        Easy To Use
      </li>
    </div>
  );
}
