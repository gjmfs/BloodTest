import { pass } from "../Results";

export const Lipid = () => {
  const down = () => {
    window.print();
  };
  const result = (
    <>
      <tr>
        <th scope="row">Total Cholesterol</th>
        <td>{pass.toatlcol}</td>
        <td>mg/dl</td>
        <td>150-250</td>
      </tr>
      <tr>
        <th scope="row">H.D.L Cholesterol</th>
        <td>{pass.HDLCols}</td>
        <td>mg/dl</td>
        <td>&gt;45</td>
      </tr>
      <tr>
        <th scope="row">L.D.L Cholesterol</th>
        <td>{pass.LDLCols}</td>
        <td>mg/dl</td>
        <td>75-130</td>
      </tr>
      <tr>
        <th scope="row">Triglycerides</th>
        <td>{pass.triglycerides}</td>
        <td>mg/dl</td>
        <td>100-150</td>
      </tr>
      <tr>
        <th scope="row">V.L.D.L</th>
        <td>{pass.VLDL}</td>
        <td>mg/dl</td>
        <td>10-44</td>
      </tr>
      <tr>
        <th scope="row">Non HDL Cholestrol</th>
        <td>{pass.NonHDLCols}</td>
        <td>mg/dl</td>
        <td>&gt;130</td>
      </tr>
      <tr>
        <th scope="row">CHOL/HDL</th>
        <td>{pass.CHOLorHDL}</td>
        <td>mg/dl</td>
        <td>&gt;3.5</td>
      </tr>
    </>
  );
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-3 text-light p-2 bg-success rounded">
          Laboratory Report
        </h1>
      </div>
      <h3 className="mb-3">Lipid Profile</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Test</th>
            <th scope="col">Result</th>
            <th scope="col">Unit</th>
            <th scope="col">Ref.Range</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <button className="btn btn-outline-success" onClick={down}>
        Download
      </button>
    </div>
  );
};
