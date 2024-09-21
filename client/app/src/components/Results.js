import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Lipid } from "./type/Lipid";

//passing user data to the variable outsite the function
export let pass;

export const Results = () => {
  const [NIC, setNIC] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [userDate, setUserDate] = useState();
  const [method, setMethod] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(NIC) || NIC.trim() === "") {
      setError("Please enter a valid NIC number");
      setUsers([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3001/search?search=${NIC}`
      );
      if (response.data.length === 0) {
        setError("No results found");
      } else {
        setUsers(response.data);
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  };
  const showDB = () => {
    document.querySelector("table").style.opacity = "1";
  };

  //geting info for showing available data

  const getResultdata = async (userId) => {
    await axios
      .get(`http://localhost:3001/getResult?uId=${userId}`)
      .then((Resultdata) => {
        setUserDate(Resultdata.data);
        console.log(Resultdata);
        setMethod(1);
      });
  };

  return (
    <>
      <div className="container border border-1 mt-3 p-3">
        <form className="row row-cols-1 g-3" onSubmit={handleSubmit}>
          <div className="col">
            <label htmlFor="NIC" className="form-label">
              Enter Your NIC No Here:
            </label>
            <input
              type="text"
              className="form-control"
              id="NIC"
              value={NIC}
              onChange={(e) => setNIC(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button onClick={showDB} type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </form>
      </div>
      <table className="table mt-3" style={{ opacity: "0" }}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">NIC</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr
                onClick={async () => {
                  await getResultdata(user._id);
                  setMethod(1);
                }}
                key={index}
              >
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.NIC}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">{error ? error : "No results found"}</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">Dates</th>
          </tr>
        </thead>
        <tbody>
          {method === 1 ? (
            userDate.map((user, index) => (
              <tr
                key={index}
                onClick={() => {
                  pass = user;
                  navigate("/fResult");
                }}
              >
                <td>{user.createAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>not found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export const FinalResult = () => {
  return (
    <div className="container">
      <Lipid />
    </div>
  );
};
