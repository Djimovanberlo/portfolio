import React from "react";
import logo from "./logo.svg";
import "./App.css";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <About />
        <Projects />
        <Contact />
      </header>
    </div>
  );
};

export default App;
