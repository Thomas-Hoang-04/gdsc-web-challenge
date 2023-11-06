import FeatureCard from "./FeatureCard";
import { CardData } from "../API & Data/CardData";
import "./Features.scss";
import { Fragment } from "react";
import { idGen } from "../HOC/SynthLink";

const Features = (): JSX.Element => (
  <section
    className="features"
    key="features"
    id="feat-box"
    aria-describedby="features">
    <h1>Advanced Statistics</h1>
    <p id="features">
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>
    <section className="card-pld">
      {CardData.map((card, i, arr) => (
        <Fragment key={idGen()}>
          <FeatureCard {...card} />
          {i != arr.length - 1 && <span></span>}
        </Fragment>
      ))}
    </section>
  </section>
);

export default Features;
