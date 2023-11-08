import s from "./TrustedPlatform.module.css";
import Planes from "./AirplanesFlying.svg";
import Image from "next/image";

export default function TrustedPlatform() {
  return (
    <div>
      <div style={{ marginLeft: -35, marginTop: 28 }}>
        <Image src={Planes} alt="planes-flying" layout="responsive" />
      </div>
      <div style={{ marginTop: -120 }}>
        <h1 className={s.trustedHeading}>
          India’s Trusted <br /> Visa Platform
        </h1>
      </div>
      <div style={{ marginTop: 32 }}>
        <button className={s.askForFree}>Ask for free</button>
      </div>
    </div>
  );
}
