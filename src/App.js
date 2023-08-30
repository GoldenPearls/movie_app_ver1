import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "./routers/About";
import Home from "./routers/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;
