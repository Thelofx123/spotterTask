import FlightList from "../components/FlightList";
import FlightMap from "../components/FlightMap";
import { useMobile } from "../hooks/useMobile";
import useFlight from "../hooks/useFlight";
import React from "react";

const Flights = ({}) => {
  const { flightsData } = useFlight();
  const { isMobile } = useMobile(1024);

  return (
    <div className="w-full  flex">
      <div className="w-full lg:w-[600px] ">
        <FlightList itineraries={flightsData?.data?.itineraries || []} />
      </div>
      {!isMobile && (
        <div className="w-full">
          <FlightMap itineraries={flightsData?.data?.itineraries || []} />
        </div>
      )}
    </div>
  );
};

export default Flights;
