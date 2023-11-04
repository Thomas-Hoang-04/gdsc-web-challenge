import brand_recognition from "../../assets/images/icon-brand-recognition.svg";
import detailed_records from "../../assets/images/icon-detailed-records.svg";
import fully_customizable from "../../assets/images/icon-fully-customizable.svg";

export interface CardData {
  img: string;
  title: string;
  description: string;
}

export const CardData: CardData[] = [
  {
    img: brand_recognition,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    img: detailed_records,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    img: fully_customizable,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];
