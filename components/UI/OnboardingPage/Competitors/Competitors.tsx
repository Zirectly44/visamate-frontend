import s from "./Competitors.module.css";
import Image from "next/image";
import airbnb from "@/assets/competitors/Airbnb.png";
import LOGO from "@/assets/competitors/LOGO.png";
import musafir from "@/assets/competitors/musafir.png";
import yatra from "@/assets/competitors/yatra.png";
import ShieldIcon from "@/components/Icons/ShieldIcon";

interface LogoProps {
  id: number;
  name: string;
  logoUrl: string;
  numberOfDays: number;
  height: number;
  width: number;
}

interface CompetitorProps {
  data: LogoProps[];
}

enum Competitor {
  "Airbnb",
  "Logo",
  "Musafir",
  "Yatra",
}

// export default function Competitors({ data }: CompetitorProps) {
//   return (
//     <div className={s.competitors}>
//       {data.map((comp) => (
//         <div>
//           <Image
//             src={process.env.PUBLIC_URL + comp.logoUrl}
//             height={comp.height}
//             width={comp.width}
//             alt={comp.name}
//           />
//           <p>{comp.numberOfDays + " "}days</p>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Competitors() {
  return (
    <div>
      <div className={s.whyus}>
        <h1>Why Choose Us?</h1>
        <p>
          Atlys provide the fastest visa delivery experience amongst
          competitors.
        </p>
      </div>
      <div className={s.competitors}>
        <div className={s.item}>
          <Image src={airbnb} alt="airbnb" />
          <p>10 days</p>
        </div>
        <div className={s.item} style={{ backgroundColor: "#934FFF1A" }}>
          <Image src={LOGO} alt="logo" />
          <div>
            <ShieldIcon />
            <p style={{ marginRight: 40 }}>Best value </p>
            <p> 2 days</p>
          </div>
        </div>
        <div className={s.item}>
          <Image src={musafir} alt="musafir" />
          <p>10 days</p>
        </div>
        <div className={s.item}>
          <Image src={yatra} alt="yatra" />
          <p>10 days</p>
        </div>
      </div>
    </div>
  );
}
