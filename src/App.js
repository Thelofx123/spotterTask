import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightsProvider from "./context/FlightsContext";
import Header from "./components/Navbar";
import Flights from "./pages/Flights";
import Home from "./pages/Home";
import React from "react";
import "./App.css";

function App() {
  return (
    <FlightsProvider>
      <div className="app">
        <Header />
        <div className="pt-[44px]">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flights" element={<Flights />} />
            </Routes>
          </Router>
        </div>
      </div>
    </FlightsProvider>
  );
}

export default App;
