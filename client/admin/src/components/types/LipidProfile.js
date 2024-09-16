import { useState } from "react";
import axios from "axios";

export const LipidProfile = () => {
  const [toatlcol, setTotalcols] = useState();
  const [HDLCols, setHDLCols] = useState();
  const [LDLCols, setLDLCols] = useState();
  const [triglycerides, setTriglycerides] = useState();
  const [VLDL, setVLDL] = useState();
  const [NonHDLCols, setNonHDLCols] = useState();
  const [CHOLorHDL, setCHOLorHDL] = useState();
  const [NIC, setNIC] = useState();

  const submitResult = async (e) => {
    e.preventDefault();
    await app
      .get(`http://localhost/nicSet?nic=${NIC}`)
      .then((data) => console.log(data));
    await axios
      .post(`http://localhost:3001/setResult`, {
        toatlcol,
        HDLCols,
        LDLCols,
        triglycerides,
        VLDL,
        NonHDLCols,
        CHOLorHDL,
      })
      .then((data) => console.log(data));
  };

  return (
    <div className="container">
      <h2>LIPID Profile</h2>
      <div className="row row-cols-3">
        <div className="col">
          <label htmlFor="nic" className="form-label">
            NIC:
          </label>
          <input
            type="number"
            className="form-control"
            name="nic"
            onChange={(e) => setNIC(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="TotalColesterol">
            Total Colesterol:
          </label>
          <input
            type="number"
            className="form-control"
            name="TotalColesterol"
            onChange={(e) => setTotalcols(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="HDLColesterol">
            HDL Colesterol:
          </label>
          <input
            type="number"
            className="form-control"
            name="HDLColesterol"
            onChange={(e) => setHDLCols(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="LDLColesterol">
            LDL Colesterol:
          </label>
          <input
            type="number"
            className="form-control"
            name="LDLColesterol"
            onChange={(e) => setLDLCols(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="Triglycerides">
            {" "}
            triglycerides:
          </label>
          <input
            type="number"
            className="form-control"
            name="Triglycerides"
            onChange={(e) => setTriglycerides(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="VLDL">
            V.L.D.L:
          </label>
          <input
            type="number"
            name="VLDL"
            className="form-control"
            onChange={(e) => setVLDL(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="NonHDLCholestrol">
            NON HDL Cholestrol:
          </label>
          <input
            type="number"
            className="form-control"
            name="NonHDLCholestrol"
            onChange={(e) => setNonHDLCols(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="CHOLorHDL">
            {" "}
            CHOL/HDL:
          </label>
          <input
            type="number"
            className="form-control"
            name="CHOLorHDL"
            onChange={(e) => setCHOLorHDL(e.target.value)}
          />
        </div>
      </div>
      <button onClick={submitResult} className="btn btn-primary">
        Submit Result
      </button>
    </div>
  );
};
