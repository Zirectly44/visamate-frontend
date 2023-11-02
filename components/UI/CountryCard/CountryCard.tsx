import Image from "next/image";
import Dubai from "@/images/dubai.png";
import s from "./CountryCard.module.css";

export default function CountryCard() {
  return (
    <div className={s.CountryCardContainer}>
      <Image src={Dubai} alt="Dubai" />
      <div className={s.CountryCardText}>
        <p>🇦🇪 United Arab Emirates</p>
        <p>₹7,450</p>
      </div>
    </div>
  );
}
