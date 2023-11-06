import Image from "next/image";
import Dubai from "@/assets/LandingPage/dubai.png";
import s from "./CountryCard.module.css";


interface CountryCardProps {
  processingTime: number; // Assuming processing time is represented as a string
  imageUrl: string; // URL for the country image
  countryName: string;
  countryFlag: string; // URL for the country flag image
  price: number; // Assuming price is represented as a number
}

export default function CountryCard({
  processingTime,
  imageUrl,
  countryName,
  countryFlag,
  price,
}: CountryCardProps) {
  return (
    <div className={s.CountryCardContainer}>
      <p className={s.geton}>Get on {processingTime}</p>
      <Image src={Dubai} alt="Dubai" />
      <div className={s.CountryCardText}>
        <p>{countryFlag} {countryName}</p>
        <p>₹{price}</p>
      </div>
    </div>
  );
}
