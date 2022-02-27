import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/home" component={Home} />
          <Route path="/header" component={Header} />
        </Routes>
      </Router>
      <Header />
      <Home />
    </div>
  );
}
export default App;
