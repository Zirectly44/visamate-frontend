import Image from "next/image";
import Dubai from "../../../images/dubai.png"
import s from "./CountryCard.module.css";

interface Props {
  url: string;
  countryName: string;
  price: number;
  width?: number; 
}
function remToPixels(rem: number): number {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default function CountryCard({ url, countryName, price }: Props) {
  const widthInPixels = remToPixels(200);
  const heightInPixels = remToPixels(200);
  return (

    <div className={s.CountryCardContainer}>
      <Image src={url} alt="Dubai" width={266.8} height={270} className={s.ImageStyle}/>
      <div className={s.CountryCardText}>
          <p>🇦🇪 {countryName}</p>
          <p>{price} $</p>
        </div>
    </div>
   
    
  );
}
