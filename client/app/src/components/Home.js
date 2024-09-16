import background from "../images/home.png";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="row align-items-center row-cols-1 row-cols-md-2">
        <div className="col">
          <div className="container ">
            <h1>Blood Test</h1>
            <h3>Landing Page</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              maxime nulla dolorum fuga in odio accusantium tenetur, quae illum
              saepe dolorem, quaerat deserunt repellat hic pariatur dignissimos
              aliquid distinctio eaque.
            </p>
            <Link to={"/contact"}>Register</Link>
          </div>
        </div>
        <div className="col">
          <img className="img-fluid" src={background} alt="" />
        </div>
      </div>
    </div>
  );
};
