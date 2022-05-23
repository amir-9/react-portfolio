import React from "react";
import "./App.css";
import About from "./components/about/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/contact";
function App() {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </React.Fragment>
  );
}

export default App;
