import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

//creating selection of deletation
export const Delete = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="cols">
          <Link to={"/delete/user"}>User</Link>
        </div>
        <div className="cols">
          <Link>Result</Link>
        </div>
      </div>
    </div>
  );
};

//creating user delete request model
export const UserDelete = () => {
  const [user, setUser] = useState([]);
  const [delUser, setDelUser] = useState();
  const [NIC, setNIC] = useState();

  const search = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://localhost:3001/getUser?getUser=${NIC}`)
      .then((result) => {
        if (result.data === 1) {
          console.log("user not exist");
        } else {
          setUser(result.data);
          console.log(result.data);
        }
      });
  };

  const deleteUser = async (e) => {
    await axios
      .delete(`http://localhost:3001/delUser?delUser=${delUser}`)
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  };

  const data = user.map((user, index) => (
    <tr
      onClick={() => {
        deleteUser();
        setDelUser(user._id);
      }}
      key={index}
      className="table-dark"
    >
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.NIC}</td>
    </tr>
  ));
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <label htmlFor="nic">NIC:</label>
            <input type="number" onChange={(e) => setNIC(e.target.value)} />
          </div>
          <div className="col">
            <button onClick={search}>search</button>
          </div>
        </div>
      </div>
      <table className="table mt-4 table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">NIC</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
  );
};
