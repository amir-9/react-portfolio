import React from "react";
import "./App.css";
import About from "./components/about/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/productList";
function App() {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
