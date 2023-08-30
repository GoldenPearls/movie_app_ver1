import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "./routers/About";

function App() {
  return (
    <HashRouter>
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;
