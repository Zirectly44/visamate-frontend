import CountryCard from "@/components/UI/CountryCard/CountryCard";
import s from "./_tourist.module.css";
import Image from "next/image";
import heroImg from "@/images/heroimg.png";

export default function Tourist() {
  return (
    <div>
      <div className={s.imgContainer}>
        <Image src={heroImg} alt="hero-img" fill />
      </div>
      <div className={s.wrapper}>
        <h2>Tourist Visas Around the World</h2>
        <div className={s.continents}>
          <button>Asia</button>
          <button>Europe</button>
          <button>Latin America</button>
          <button>North America</button>
          <button>Oceania</button>
          <button>Africa</button>
          <button>Middle East</button>
        </div>
        <div className={s.CountryCardGrid}>
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </div>
    </div>
  );
}
