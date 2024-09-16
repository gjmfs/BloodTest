import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to={"/create"}>Create</Link>
          </div>
          <div className="col">Update</div>
          <div className="col">View</div>
          <div className="col">
            <Link to={"/delete"}>Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
