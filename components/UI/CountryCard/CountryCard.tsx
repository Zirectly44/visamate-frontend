import Image from "next/image";
import Dubai from "../../../images/dubai.png"
import s from "./CountryCard.module.css";

interface Props {
  url: string;
  countryName: string;
  price: number;
  width?: number; 
}

export default function CountryCard({ url, countryName, price }: Props) {
  return (
    <div className="wrapper">
    <div className={s.CountryCardContainer}>
      {/* <Image src={url} alt="Dubai" width={`${width}rem`} height={200} /> */}
    </div>
          <div className={s.CountryCardText}>
          <p>🇦🇪 {countryName}</p>
          <p>{price} $</p>
        </div>
        </div>
  );
}
