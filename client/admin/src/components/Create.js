import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateUser = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [NIC, setNic] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://localhost:3001/search?search=${NIC}`)
      .then((result) => {
        if (result.data === 1) {
          axios
            .post("http://localhost:3001/setUser", { name, age, NIC })
            .then((data) => {
              console.log(data);
            });
        } else {
          console.log("user exist");
        }
        navigate("/setResult");
      });
  };

  return (
    <div className="container">
      <div className="CreateUser">
        <form action="post">
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              {" "}
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              id="Age"
              onChange={(e) => setAge(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="NIC" className="form-label">
              NIC:
            </label>
            <input
              type="number"
              className="form-control"
              id="NIC"
              placeholder=""
              onChange={(e) => setNic(e.target.value)}
            />
          </div>
        </form>
      </div>

      <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};
