import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/*" element={<Home />} />
        <Route exact path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
