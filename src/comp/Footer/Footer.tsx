import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconList } from "../API & Data/IconData";
import "./Footer.scss";

const Footer = (): JSX.Element => (
  <footer className="footer">
    <h1>Shortly</h1>
    <ul aria-description="Features">
      <h2>Features</h2>
      <li>Link Shortening</li>
      <li>Branded Links</li>
      <li>Analytics</li>
    </ul>
    <ul aria-description="Resources">
      <h2>Resources</h2>
      <li>Blog</li>
      <li>Developers</li>
      <li>Support</li>
    </ul>
    <ul aria-description="Company">
      <h2>Company</h2>
      <li>About</li>
      <li>Our Team</li>
      <li>Careers</li>
      <li>Contact</li>
    </ul>
    <section className="social-media">
      {IconList.map(
        (icon): JSX.Element => (
          <a href={icon.link} key={icon.id}>
            <FontAwesomeIcon
              icon={icon.icon}
              color="hsl(150, 6%, 93%)"
              size="xl"
              className="cursor-pointer hover:text-pri-cyan transition-all ease-in-out duration-200"
              aria-label={icon.brand}
              aria-description={`${icon.brand} Icon`}
            />
          </a>
        )
      )}
    </section>
  </footer>
);

export default Footer;
