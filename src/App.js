import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <NavBar />
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
