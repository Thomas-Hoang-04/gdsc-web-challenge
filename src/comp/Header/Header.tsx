import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import logo from "../../assets/images/logo.svg";

import "./Header.scss";

const Header = (): JSX.Element => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="Shortly"
          aria-description="App name & logo"
          className="cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faBars}
          color="hsl(0, 0%, 70%)"
          size="2xl"
          className="md:hidden cursor-pointer"
          onClick={() => setDisplayMenu(!displayMenu)}
          aria-label="Menu"
          aria-controls="menu-mobile"
          aria-description="Hamburger menu icon"
        />
      </header>

      <nav
        className={`menu-mobile${displayMenu ? " active" : ""}`}
        aria-label="Primary Menu">
        <ul>
          <li aria-label="Features">Features</li>
          <li aria-label="Pricing">Pricing</li>
          <li aria-label="Resources">Resources</li>
        </ul>
        <hr className="w-[90%] my-4 border-neut-grayish-violet opacity-40" />
        <ul className="w-full">
          <li aria-label="Login">Login</li>
          <li className="w-full">
            <button
              className="bg-pri-cyan p-3 rounded-full w-full"
              aria-label="Sign up"
              aria-description="Sign up with Shortly">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
