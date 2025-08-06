import "./styles.css";
import React from "react";
import Home from "../my-app/src/Components/Home";
import About from "../my-app/src/Components/About";
import Navabar from "../my-app/src/Components/Navbar";
import Counseling from "../my-app/src/Components/Counselling";
import FAQ from "../my-app/src/Components/FAQ";
import Footer from "../my-app/src/Components/footer";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navabar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Counseling" element={<Counseling />} />
        <Route path="/register" element={<Register />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}
