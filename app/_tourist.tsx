"use client";

import CountryCard from "@/components/UI/CountryCard/CountryCard";
import s from "./_tourist.module.css";
import Image from "next/image";
import heroImg from "@/assets/LandingPage/heroimg.png";
import { useState, useEffect } from "react";
import touristdata from "./touristdata.json";

export default function Tourist() {
  // const [data, setData] = useState([]);
  // console.log(touristdata)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const response = await fetch('./data.json'); // Fetch the JSON file from the public directory
  //     // const jsonData = await response.json();
  //     // setData();
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <div className={s.imgContainer}>
        <Image src={heroImg} alt="hero-img" fill />
      </div>
      <div className={s.wrapper}>
        <h2>Tourist Visas Around the World</h2>
        {/* <div className={s.continents}>
          <button>Asia</button>
          <button>Europe</button>
          <button>Latin America</button>
          <button>North America</button>
          <button>Oceania</button>
          <button>Africa</button>
          <button>Middle East</button>
        </div> */}
        <div className={s.CountryCardGrid}>
          {touristdata.data.map((item) => (
            <CountryCard
              key={item.id}
              processingTime={item.attributes.ProcessingTime}
              imageUrl={item.attributes.cardBanner.data.attributes.url}
              countryName={item.attributes.visaType}
              countryFlag={item.attributes.cardBanner.data.attributes.name}
              price={item.attributes.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
