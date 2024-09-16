import { useState } from "react";
import axios from "axios";

export const Results = () => {
  const [NIC, setNIC] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

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
              <tr onClick={() => console.log("clicked")} key={index}>
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
    </>
  );
};
