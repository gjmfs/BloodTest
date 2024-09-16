import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Nav } from "./components/Nav";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";
import { Service } from "./components/Service";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/service" element={<Service />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
