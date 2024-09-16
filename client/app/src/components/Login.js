import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        } else {
          setErr("Invalid Password");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container border border-1 mt-3 p-3">
      <form className="row row-cols-1 g-3">
        <div className="col">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>{err}</div>
      </form>
      <div className="col pt-3">
        <Link onClick={handleSubmit} className="btn btn-success">
          Sign in
        </Link>
      </div>
    </div>
  );
};
