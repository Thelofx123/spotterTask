import { HotelsOnFlightSideBar } from "./HotelsOnFlightSideBar";
import { FlightSideBarButton } from "./FlightSideBarButton";
import { formatDate } from "../utility/helper";
import { WhenToVisit } from "./WhenToVisit";
import { FlightMini } from "./FlightMini";
import { Seperator } from "./Seperator";
import React, { useState } from "react";
import FlightCard from "./FlightCard";
import SearchBar from "./SearchBar";
import FlightFilter from "./FlightFilter";

const FlightList = ({ itineraries, data }) => {
  const [selectedFlightCard, setSelectedFlightCard] = useState(null);
  const [sideBarDetail, setSetBarDetail] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState(itineraries);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);

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

  return (
    <div className=" relative h-screen overflow-scroll scrollbar-hide ">
      <SearchBar sidebar={true} />

      <div className="w-full relative py-[30px] ">
        <div className="py-[10px] border-y-[1px] border-[#5F6368] px-[30px] ">
          <div
            className="w-fit  rounded-xl hover:bg-[#333438] py-[6px] px-[8px] cursor-pointer"
            onClick={() => {
              setIsVisibleFilter(!isVisibleFilter);
            }}
          >
            <p className=" text-[#8ab4f8]">All filters</p>
          </div>
        </div>
        {isVisibleFilter && (
          <div className="absolute left-[20px] overflow-scroll scrollbar-hide h-[500px] z-[100]">
            <FlightFilter
              flights={itineraries}
              setFilteredFlights={setFilteredFlights}
              setIsVisibleFilter={setIsVisibleFilter}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        )}
      </div>

      <div className="relative w-full h-[50px] flex items-center justify-end  px-[20px]">
        About these results !
      </div>

      {sideBarDetail && selectedFlightCard ? (
        <div className="w-full  overflow-scroll absolute top-0 bg-black z-[200]">
          <div className="w-full h-auto ">
            <div className="w-full relative top-0">
              <img
                src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="  z-[20]"
              />
              <div
                onClick={() => {
                  setSetBarDetail(false);
                  setSelectedFlightCard(null);
                }}
                className="absolute top-[20px] left-[20px]  bg-[#555] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
              >
                x
              </div>
              <div className="z-[100] absolute  bottom-0  p-[20px] w-full">
                <p className="text-[24px] text-white">
                  {selectedFlightCard?.legs[0]?.destination?.city}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[14px]">
                    {selectedFlightCard?.legs[0]?.destination?.country}
                  </p>
                  <div className="flex gap-[5px]">
                    <p>{formatDate(selectedFlightCard?.legs[0]?.arrival)}</p>-
                    <p>{formatDate(selectedFlightCard?.legs[0]?.departure)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  bg-[#202125] relative z-[200] rounded-t-2xl mt-[-10px] border-[1px] border-[#5F6368]">
            <div className="py-[20px] flex items-center justify-center px-[32px]">
              <p className="text-[24px]">
                Flight from {selectedFlightCard?.legs[0]?.origin?.city}
              </p>
            </div>
            <div className="p-[20px]">
              {selectedFlightCard?.legs[0].segments.map((e, i) => {
                return (
                  <div className={` ${i !== 0 ? "border-t-[1px]" : ""}`}>
                    <FlightMini data={e} price={selectedFlightCard?.price} />
                  </div>
                );
              })}
              <FlightSideBarButton label={"View flights"} />
            </div>
            <Seperator />
            <HotelsOnFlightSideBar />
            <Seperator />
            <WhenToVisit />
            <Seperator />
          </div>
        </div>
      ) : (
        filteredFlights.map((flight) => (
          <div className="px-[20px]">
            <FlightCard
              flight={flight}
              sideBarDetail={sideBarDetail}
              setSetBarDetail={setSetBarDetail}
              setSelectedFlightCard={setSelectedFlightCard}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default FlightList;
