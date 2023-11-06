import Competitors from "@/components/UI/OnboardingPage/Competitors";
import MainImage from "@/components/UI/OnboardingPage/MainImage/MainImage";
// import CompetitorsData from "./CompetitorsData.json";
import s from "./OnboardPage.module.css";
import FAQs from "@/components/UI/OnboardingPage/Accordion/FAQs";

export default function OnboardPage() {
  return (
    <div className={s.left}>
      <MainImage />
      <Competitors />
      <FAQs />
    </div>
  );
}
