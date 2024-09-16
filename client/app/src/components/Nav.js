import { Link } from "react-router-dom";
import logo from "../images/bloodTestLogo.png";

import "./Nav.css";

export const Nav = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <img className="logo" src={logo} alt="life care medical lab logo" />
        </Link>

        <div className="links-container">
          <Link className="home-link" to={"/"}>
            Home
          </Link>
          <Link to={"/results"}>Check Results</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/about"}>About Us</Link>
        </div>
      </nav>
    </header>
  );
};
