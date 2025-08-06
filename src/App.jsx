import "./styles.css";
import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Navabar from "./Components/Navbar";
import Counseling from "./Components/Counselling";
import FAQ from "./Components/FAQ";
import Footer from "./Components/footer";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navabar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Counseling" element={<Counseling />} />
        <Route path="/register" element={<register />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}
