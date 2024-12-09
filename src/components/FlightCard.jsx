import "../style/flightStyle.css";
import React from "react";

const FlightCard = ({ flight, setSetBarDetail, setSelectedFlightCard }) => {
  const leg = flight?.legs[0];
  const durationHours = Math.floor(leg?.durationInMinutes / 60);
  const durationMinutes = leg?.durationInMinutes % 60;

  return (
    <div
      className="w-full border-[1px]  gap-[10px] border-black  mt-[10px] rounded-lg flex "
      onClick={() => {
        setSetBarDetail(true);
        setSelectedFlightCard(flight);
      }}
    >
      <img
        src={leg.carriers.marketing[0]?.logoUrl}
        alt={`${leg.carriers.marketing[0]?.name} logo`}
        className=" rounded-lg h-[100px] w-[100px] "
      />
      <div className=" p-[10px] w-full">
        <h3>{leg?.destination?.city}</h3>
        <div className="flight-details-mini">
          <p className="text-[14px] text-[#f0f0f0]">
            {`${leg?.stopCount} stop(s) - ${durationHours}h ${durationMinutes}m`}
          </p>
        </div>
        <div className="w-full flex justify-end">
          <p>US{flight?.price?.formatted}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
