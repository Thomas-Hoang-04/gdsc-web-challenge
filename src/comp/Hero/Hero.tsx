import pld from "../../assets/images/illustration-working.svg";
import "./Hero.scss";

const Hero = (): JSX.Element => (
  <section className="hero" aria-describedby="hero-description">
    <div className="overflow-x-clip w-screen xl:w-max xl:pl-[20rem]">
      <img src={pld} alt="A person working on his/her table" />
    </div>
    <article id="hero-description" className="hero-description">
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button
        className="get-started"
        aria-label="Get Started"
        aria-description="Start shortening links with Shortly"
        onClick={() =>
          document.getElementById("link-inp")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          })
        }>
        Get Started
      </button>
    </article>
  </section>
);

export default Hero;
