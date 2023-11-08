"use client";
import s from "./page.module.css";
import Navbar from "@/components/UI/Navbar";
import Tourist from "./_tourist";
import { useState } from "react";
import SelfPraise from "@/components/UI/LandingPage/SelfPraise";
import TrustedPlatform from "@/components/UI/LandingPage/TrustedPlatform";
import Image from "next/image";
import TouristHeroImg from "@/assets/LandingPage/tourist_hero.png";
import BackpackIcon from "@/components/Icons/BackpackIcon";
import BuildingsIcon from "@/components/Icons/BuildingsIcon";
import BagSimpleIcon from "@/components/Icons/BagSimpleIcon";
import HomeIcon from "@/components/Icons/HomeIcon";

export default function Home() {
  const [activePage, setActivePage] = useState(1);
  return (
    <div>
      <div className={s.imgContainer}>
        <Image src={TouristHeroImg} alt="hero-img" layout="responsive" />

        <div className={s.pageNavigator}>
          <button
            className={activePage === 1 ? s.activeButton : ""}
            onClick={() => setActivePage(1)}
          >
            <BackpackIcon active={activePage === 1} style={{ marginRight: 6 }} />
            Tourist
          </button>
          <button
            className={activePage === 2 ? s.activeButton : ""}
            onClick={() => setActivePage(2)}
          >
            <BuildingsIcon
              active={activePage === 2}
              style={{ marginRight: 6 }}
            />
            Business
          </button>
          <button
            className={activePage === 3 ? s.activeButton : ""}
            onClick={() => setActivePage(3)}
          >
            <BagSimpleIcon
              active={activePage === 3}
              style={{ marginRight: 6 }}
            />
            Job Seeker
          </button>
          <button
            className={activePage === 4 ? s.activeButton : ""}
            onClick={() => setActivePage(4)}
          >
            <HomeIcon
              active={activePage === 4}
              style={{ marginRight: 6 }}
            />
            Residency
          </button>
        </div>
      </div>

      <div className={s.navbar_margin}>
        <Navbar />
        <div className={s.intro}>
          <TrustedPlatform />
          <SelfPraise />
        </div>
      </div>
      <div className={s.cardsSection}>
        <Tourist />
      </div>
    </div>
  );
}
