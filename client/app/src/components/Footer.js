import { Link } from "react-router-dom";
import logo from "../images/bloodTestLogo.png";
import menu from "../images/menu.svg";
import close from "../images/close.svg";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="Footer">
      <nav>
        <Link to={"/"}>
          <img className="logo" src={logo} alt="life care medical lab logo" />
        </Link>
        <input type="checkbox" name="" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <img src={menu} alt="" />
        </label>

        <label htmlFor="sidebar-active" id="ovelay"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <img src={close} alt="" />
          </label>
          <Link className="home-link" to={"/"}>
            Home
          </Link>
          <Link to={"/results"}>Check Results</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/about"}>About Us</Link>
        </div>
      </nav>
    </div>
  );
};
