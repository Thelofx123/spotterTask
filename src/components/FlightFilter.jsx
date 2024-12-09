import React, { useEffect, useState } from "react";
import { minutesToHoursAndMinutes } from "../utility/helper";
import { Slider } from "./Slider";
import { filterData } from "../data/filterData";

const FlightFilter = ({ flights, setFilteredFlights, setIsVisibleFilter }) => {
  const [filters, setFilters] = useState({
    isCancellationAllowed: false,
    isChangeAllowed: false,
    isPartiallyChangeable: false,
    isPartiallyRefundable: false,
    isProtectedSelfTransfer: false,
    isSelfTransfer: false,
    durationInMinutes: [0, 2000],
    stopCount: [0, 2],
    priceRange: [0, 5000],
  });

  const handleToggle = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleRangeChange = (filter, value) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const applyFilters = () => {
    const filtered = flights.filter((flight) => {
      const totalDuration = flight.legs[0]?.durationInMinutes;
      const totalStops = flight?.legs[0]?.stopCount;
      const flightPrice = flight.price.raw;

      return (
        (!filters.isCancellationAllowed ||
          flight.farePolicy.isCancellationAllowed) &&
        (!filters.isChangeAllowed || flight.farePolicy.isChangeAllowed) &&
        (!filters.isPartiallyChangeable ||
          flight.farePolicy.isPartiallyChangeable) &&
        (!filters.isPartiallyRefundable ||
          flight.farePolicy.isPartiallyRefundable) &&
        (!filters.isProtectedSelfTransfer || flight.isProtectedSelfTransfer) &&
        (!filters.isSelfTransfer || flight.isSelfTransfer) &&
        totalDuration >= filters.durationInMinutes[0] &&
        totalDuration <= filters.durationInMinutes[1] &&
        totalStops >= filters.stopCount[0] &&
        totalStops <= filters.stopCount[1] &&
        flightPrice >= filters.priceRange[0] &&
        flightPrice <= filters.priceRange[1]
      );
    });

    setFilteredFlights(filtered);
    setIsVisibleFilter(false);
  };

  useEffect(() => {
    if (flights.length > 0) {
      const allPrices = flights.map((flight) => flight.price.raw);
      const minPrice = Math.min(...allPrices);
      const maxPrice = Math.max(...allPrices);

      setFilters((prev) => ({
        ...prev,
        priceRange: [minPrice, maxPrice],
      }));
    }
  }, [flights]);

  return (
    <div className="p-6 bg-[#333438] text-white rounded-lg w-full space-y-6 ">
      <div className="sticky top-[0px] w-full h-full bg-[#333438] z-[100] py-[20px]">
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="grid grid-cols-2 divide-y divide-x divide-gray-600 border border-gray-600 rounded-lg overflow-hidden">
        {filterData.map((filter) => (
          <div
            key={filter.key}
            className={`flex items-center justify-center py-[40px] flex-col bg-[#333438] hover:bg-gray-700 cursor-pointer ${
              filters[filter.key] == true && "bg-slate-600"
            }`}
            onClick={() => {
              handleToggle(filter.key);
            }}
          >
            <div className="w-[32px] h-[32px] ">{filter.svg}</div>
            <p className="pt-[10px]">{filter.label}</p>
          </div>
        ))}
      </div>

      <Slider
        header={"Duration (minutes)"}
        label={`Up to ${minutesToHoursAndMinutes(
          filters.durationInMinutes[1]
        )} minutes`}
        min={0}
        max={2000}
        value={filters.durationInMinutes[1]}
        onChange={(e) => {
          handleRangeChange("durationInMinutes", [
            filters.durationInMinutes[0],
            Number(e.target.value),
          ]);
        }}
      />

      <Slider
        header={"Stop Count"}
        label={`Up to ${filters.stopCount[1]} stops`}
        min={0}
        max={5}
        value={filters.stopCount[1]}
        onChange={(e) => {
          handleRangeChange("stopCount", [0, Number(e.target.value)]);
        }}
      />
      <Slider
        header={"Price (USD)"}
        label={`Price: $${filters.priceRange[1]}`}
        min={0}
        max={5000}
        value={filters.priceRange[1]}
        onChange={(e) => {
          handleRangeChange("priceRange", [
            filters.priceRange[0],
            Number(e.target.value),
          ]);
        }}
      />
      <div className="sticky bottom-0 w-full px-[20px] py-[10px] bg-[#333438] z-[100]">
        <button
          onClick={applyFilters}
          className="w-full bg-blue-600 h-full text-white py-2 rounded-md hover:bg-blue-700"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FlightFilter;
