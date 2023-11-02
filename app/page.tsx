"use client";
import s from "./page.module.css";
import Navbar from "@/components/UI/Navbar";
import Tourist from "./_tourist";
import TravelIcon from "@/components/Icons/TravelIcon";
import BusinessIcon from "@/components/Icons/BusinessIcon";
import JobSeekerIcon from "@/components/Icons/JobSeekerIcon";
import ResidencyIcon from "@/components/Icons/ResidencyIcon";
import { useState } from "react";
import CircleCheckIcon from "@/components/Icons/CircleCheckIcon";

export default function Home() {
  const [activePage, setActivePage] = useState(1);
  return (
    <div>
      <div className={s.navbar_margin}>
        <Navbar />
        <div>
          <h1>
            India’s Trusted <br /> Visa Platform
          </h1>
          <li>
            <CircleCheckIcon style={{marginRight:4}}/>
            Fast Processing
          </li>
          <li>
            <CircleCheckIcon style={{marginRight:4}}/>
            Money Back Guarantee
          </li>
          <li>
            <CircleCheckIcon style={{marginRight:4}}/>
            Easy To Use
          </li>
          <li>
            <CircleCheckIcon style={{marginRight:4}}/>
            Top Notch Support
          </li>
        </div>
      </div>

      <div className={s.pageNavigator}>
        <button
          className={activePage === 1 ? s.activeButton : ""}
          onClick={() => setActivePage(1)}
        >
          <TravelIcon active={activePage === 1} style={{ marginRight:46 }} />
          Tourist
        </button>
        <button
          className={activePage === 2 ? s.activeButton : ""}
          onClick={() => setActivePage(2)}
        >
          <BusinessIcon active={activePage === 2} style={{ marginRight:46 }} />
          Business
        </button>
        <button
          className={activePage === 3 ? s.activeButton : ""}
          onClick={() => setActivePage(3)}
        >
          <JobSeekerIcon active={activePage === 3} style={{ marginRight:46 }} />
          Job Seeker
        </button>
        <button
          className={activePage === 4 ? s.activeButton : ""}
          onClick={() => setActivePage(4)}
        >
          <ResidencyIcon active={activePage === 4} style={{ marginRight:46 }} />
          Residency
        </button>
      </div>

      <Tourist />
    </div>
  );
}
