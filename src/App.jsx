import React from "react";
import "./App.scss";
import { Router } from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
