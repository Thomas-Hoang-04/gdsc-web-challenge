import "./Footer.scss";

const FooterHero = (): JSX.Element => (
  <article className="footer-hero">
    <h1>Boost your links today</h1>
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
);

export default FooterHero;
