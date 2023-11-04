import FeatureCard from "./FeatureCard";
import { CardData } from "../API & Data/CardData";
import "./Features.scss";
import { Fragment } from "react";

const idGen = (): string => (Math.random() + 1).toString(36).substring(6);

const Features = (): JSX.Element => (
  <section className="features" key="features">
    <h1>Advanced Statistics</h1>
    <p>
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>
    {CardData.map((card, i, arr) => (
      <Fragment key={idGen()}>
        <FeatureCard {...card} />
        {i != arr.length - 1 && <span></span>}
      </Fragment>
    ))}
  </section>
);

export default Features;
