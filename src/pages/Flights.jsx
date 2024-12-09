import React from "react";

import FlightList from "../components/FlightList";
import FlightMap from "../components/FlightMap";
import useFlight from "../hooks/useFlight";
import { useMobile } from "../hooks/useMobile";

const Flights = ({ data }) => {
  const { flightsData } = useFlight();
  const { isMobile } = useMobile(1024);

  return (
    <div className="w-full  flex">
      <div className="w-full lg:w-[600px] ">
        <FlightList itineraries={flightsData?.data?.itineraries} />
      </div>
      {!isMobile && (
        <div className="w-full">
          <FlightMap itineraries={flightsData?.data?.itineraries} />
        </div>
      )}
    </div>
  );
};

export default Flights;
