import Image from "next/image";
import s from "./MainImage.module.css";
import DubaiImg from "@/assets/OnboardingPage/dubai_visa.png";

export default function MainImage() {
  return (
    <div className={s.wrapper}>
      <Image
        src={DubaiImg}
        alt="Dubai"
        style={{ borderRadius: 20, zIndex: -1 }}
        layout="responsive"
      />
      <div className={s.wrapperText}>
        <h1>Dubai Visa</h1>
        <p>For Indians</p>
      </div>
    </div>
  );
}
