import {
  faSquareFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface IconProps {
  id: string;
  icon: IconDefinition;
  brand: string;
  link: string;
}

export const IconList: IconProps[] = [
  {
    id: "Facebook",
    link: "https://facebook.com",
    icon: faSquareFacebook,
    brand: "Facebook",
  },
  {
    id: "Twitter",
    link: "https://twitter.com",
    icon: faTwitter,
    brand: "Twitter",
  },
  {
    id: "Pinterest",
    link: "https://pinterest.com",
    icon: faPinterest,
    brand: "Pinterest",
  },
  {
    id: "Instagram",
    link: "https://instagram.com",
    icon: faInstagram,
    brand: "Instagram",
  },
];
