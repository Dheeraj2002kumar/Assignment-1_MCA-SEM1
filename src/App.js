import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
