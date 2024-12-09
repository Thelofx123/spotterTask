import React, { useEffect } from "react";

import "./App.css";
import Header from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import FlightsProvider from "./context/FlightsContext";

function App() {
  return (
    <FlightsProvider>
      <div className="app">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
          </Routes>
        </Router>
      </div>
    </FlightsProvider>
  );
}

export default App;
