import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";

function MainPage() {
  return (
    <Router>
      <div className="MainPage">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainPage;
