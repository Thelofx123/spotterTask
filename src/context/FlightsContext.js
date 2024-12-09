import React, { createContext, useState, useEffect } from "react";

export const FlightsContext = createContext();

const FlightsProvider = ({ children }) => {
  const [flightsData, setFlightsData] = useState(() => {
    const storedData = localStorage.getItem("flightsData");
    return storedData ? JSON.parse(storedData) : null;
  });

  const [flightParams, setFlightParams] = useState(() => {
    const storedParams = localStorage.getItem("flightParams");
    return storedParams ? JSON.parse(storedParams) : null;
  });

  const saveFlightData = (data, params) => {
    setFlightsData(data);
    setFlightParams(params);

    localStorage.setItem("flightsData", JSON.stringify(data));
    localStorage.setItem("flightParams", JSON.stringify(params));
  };

  const clearFlightData = () => {
    setFlightsData(null);
    setFlightParams(null);
    localStorage.removeItem("flightsData");
    localStorage.removeItem("flightParams");
  };

  return (
    <FlightsContext.Provider
      value={{
        flightsData,
        flightParams,
        saveFlightData,
        clearFlightData,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
