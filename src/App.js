import React from "react";
import "./App.css";
import About from "./components/about/about";
import Intro from "./components/intro/intro";
function App() {
  return (
    <React.Fragment>
      <Intro />
      <About />
    </React.Fragment>
  );
}

export default App;
