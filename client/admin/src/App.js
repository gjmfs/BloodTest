import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { CreateUser } from "./components/Create";
import { Delete, UserDelete } from "./components/Delete";
import { LipidProfile } from "./components/types/LipidProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/delete" element={<Delete />}></Route>
        <Route path="/setResult" element={<LipidProfile />}></Route>
        <Route path="/delete/user" element={<UserDelete />}></Route>
      </Routes>
    </div>
  );
}

export default App;
