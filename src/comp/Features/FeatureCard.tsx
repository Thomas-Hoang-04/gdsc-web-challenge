import "./Features.scss";

import { CardData } from "../API & Data/CardData";

const FeatureCard = ({ img, title, description }: CardData): JSX.Element => (
  <article className="feature">
    <div className="icon-pld">
      <img src={img} alt={title} className="" />
    </div>
    <h1>{title}</h1>
    <p>{description}</p>
  </article>
);

export default FeatureCard;
