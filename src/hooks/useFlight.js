import { useContext } from "react";
import { FlightsContext } from "../context/FlightsContext";

const useFlight = () => {
  const { flightsData, flightParams, saveFlightData, clearFlightData } =
    useContext(FlightsContext);

  return {
    flightsData,
    flightParams,
    saveFlightData,
    clearFlightData,
  };
};

export default useFlight;
