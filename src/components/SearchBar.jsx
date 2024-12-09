import React, { useEffect, useState } from "react";
import { fetchData } from "../utility/fetcher";
import { useMobile } from "../hooks/useMobile";
import { useNavigate } from "react-router-dom";
import useFlight from "../hooks/useFlight";
import InputWithDropdown from "./Input";
import useUser from "../hooks/useUser";
import DatePicker from "./DatePicker";

const SearchBar = ({ sidebar = false }) => {
  const { saveFlightData, flightParams } = useFlight();
  const { nearbyAirports } = useUser();
  const navigate = useNavigate();

  const [travelClass, setTravelClass] = useState("Economy");
  const [errorMessage, setErrorMessage] = useState("");
  const [tripType, setTripType] = useState("One-way");
  const { isMobile } = useMobile(1024);

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsInSeat: 0,
    infantsOnLap: 0,
  });

  const [destinationValue, setDestinationValue] = useState(null);
  const [originValue, setOriginValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [origin, setOrigin] = useState("");

  const [dropDown, setDropDowns] = useState({
    trip: false,
    passengers: false,
    economy: false,
  });

  const handleDropdownClick = (key) => {
    setDropDowns((prev) => ({
      trip: false,
      passengers: false,
      economy: false,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    if (flightParams) {
      setTripType(flightParams.returnDate ? "Round-trip" : "One-way");
      setPassengers({
        adults: flightParams.adults || 1,
        children: flightParams.children || 0,
        infantsInSeat: flightParams.infantsInSeat || 0,
        infantsOnLap: flightParams.infantsOnLap || 0,
      });
      setTravelClass(flightParams.cabinClass || "Economy");
      setOriginValue(flightParams.originEntity || null);
      setDestinationValue(flightParams.destinationEntity || null);
      setOrigin(flightParams.originEntity?.name || "");
      setDestination(flightParams.destinationEntity?.name || "");
      setStartDate(flightParams.date ? new Date(flightParams.date) : null);
      setEndDate(
        flightParams.returnDate ? new Date(flightParams.returnDate) : null
      );
    } else {
      setOriginValue(nearbyAirports?.current || null);
    }
  }, [flightParams, nearbyAirports]);

  const totalPassengers =
    passengers.adults +
    passengers.children +
    passengers.infantsInSeat +
    passengers.infantsOnLap;

  const updatePassengers = (type, action) => {
    setPassengers((prev) => {
      const updatedCount =
        action === "increase" ? prev[type] + 1 : Math.max(prev[type] - 1, 0);

      if (action === "increase" && totalPassengers >= 9) {
        alert("The maximum passenger limit is 9.");
        return prev;
      }

      return { ...prev, [type]: updatedCount };
    });
  };

  const searchFlights = async () => {
    if (!originValue || !destinationValue) {
      setErrorMessage("Please select both origin and destination!");
      return;
    }
    setIsLoading(true);
    const endpoint = "v2/flights/searchFlightsComplete";
    const params = {
      originSkyId: originValue.navigation.relevantFlightParams.skyId,
      destinationSkyId: destinationValue.navigation.relevantFlightParams.skyId,
      originEntityId: originValue?.entityId,
      destinationEntityId: destinationValue?.entityId,
      cabinClass: travelClass.toLowerCase(),
      adults: passengers.adults,
      children: passengers.children,
      currency: "USD",
      market: "en-US",
      countryCode: "US",
      date: startDate?.toISOString().split("T")[0],
      returnDate: endDate?.toISOString().split("T")[0] || "",
    };

    try {
      const data = await fetchData(endpoint, params);
      if (data?.status) {
        if (data.data.itineraries.length === 0) {
          setErrorMessage("There are no flights.");
          setIsLoading(false);
        } else {
          saveFlightData(data, params);
          setIsLoading(false);
          navigate("/flights");
        }
      } else {
        const message =
          data.message?.[0] || "Something went wrong. Please try again.";
        setErrorMessage(message.cabinClass || message);
      }
    } catch (error) {
      setIsLoading(false);
      const message =
        error.response?.data?.message?.[0] ||
        "Something went wrong. Please try again.";
      setErrorMessage(message.cabinClass || message);
    }
  };

  return (
    <div
      className={`${
        sidebar ? "w-full" : "w-full lg:w-[80%] 2xl:w-[70%]"
      }  relative  bg-[#202125] pt-[8px] px-[16px] pb-[48px] rounded-lg border-b-[1px] border-[#555] shadow-2xl lg:shadow-xl`}
    >
      {errorMessage && (
        <div className="bg-red-600 text-white text-center py-2 rounded-md mb-4">
          {errorMessage}
        </div>
      )}

      <div className=" flex items-center gap-[20px] md:gap-[30px] lg:gap-[40px] py-[10px]">
        <div className="relative">
          <button
            className="  text-white rounded-md flex items-center gap-2"
            onClick={() => handleDropdownClick("trip")}
          >
            <span>{tripType}</span>
            <span className="arrow text-[10px]">▼</span>
          </button>
          {dropDown?.trip && (
            <div className="absolute  left-0 bg-gray-800 text-white rounded-md shadow-md z-10">
              {["One-way", "Round trip", "Multi-city"].map((type) => (
                <div
                  key={type}
                  className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${
                    tripType === type ? "bg-gray-600 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setTripType(type);
                    setDropDowns({ ...dropDown, trip: false });
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <span
            className="  text-white rounded-md flex items-center gap-2 cursor-pointer"
            onClick={() => handleDropdownClick("passengers")}
          >
            {`${totalPassengers} ${totalPassengers > 1 ? "s" : ""}`}
            <span className="arrow text-[10px]">▼</span>
          </span>
          {dropDown?.passengers && (
            <div className="absolute  left-0 bg-gray-800 text-white rounded-md shadow-md z-10">
              {["adults", "children", "infantsInSeat", "infantsOnLap"].map(
                (type) => (
                  <div
                    className="flex items-center justify-between px-4 py-2"
                    key={type}
                  >
                    <label className="flex-1">
                      {type === "adults"
                        ? "Adults"
                        : type === "children"
                        ? "Children"
                        : type === "infantsInSeat"
                        ? "Infants (in seat)"
                        : "Infants (on lap)"}
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-500"
                        onClick={() => updatePassengers(type, "decrease")}
                      >
                        -
                      </button>
                      <span className="text-center w-6">
                        {passengers[type]}
                      </span>
                      <button
                        className={`bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-500 ${
                          totalPassengers >= 9
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        onClick={() => updatePassengers(type, "increase")}
                        disabled={totalPassengers >= 9}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <span
            className="  text-white rounded-md flex items-center gap-2 cursor-pointer"
            onClick={() => handleDropdownClick("economy")}
          >
            {travelClass}
            <span className="arrow text-[10px]">▼</span>
          </span>
          {dropDown?.economy && (
            <div className="absolute  left-0 bg-gray-800 text-white rounded-md shadow-md z-10">
              {["Economy", "Premium Economy", "Business", "First"].map(
                (option) => (
                  <div
                    key={option}
                    className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${
                      travelClass === option ? "bg-gray-600 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setTravelClass(option);
                      setDropDowns({ ...dropDown, economy: false });
                    }}
                  >
                    {option}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={`${
          sidebar || isMobile
            ? "grid grid-col-1 gap-[20px]"
            : "flex gap-[20px] "
        }`}
      >
        <div
          className={`${
            isMobile || sidebar ? "flex gap-[20px] " : "flex gap-[20px]"
          }`}
        >
          <InputWithDropdown
            inputValue={origin}
            setInputValue={setOrigin}
            data={[]}
            label="Origin"
            initialValue={originValue}
            setInitialValue={setOriginValue}
            placeholder="Where from?"
            sidebar={sidebar}
          />
          <InputWithDropdown
            inputValue={destination}
            setInputValue={setDestination}
            data={[]}
            label="Destination"
            initialValue={destinationValue}
            setInitialValue={setDestinationValue}
            placeholder="Where to?"
            sidebar={sidebar}
          />
        </div>
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          isRoundTrip={tripType === "Round-trip"}
          sidebar={sidebar}
        />
      </div>

      <button
        disabled={isLoading}
        onClick={searchFlights}
        className="absolute bottom-[-20px] bg-[#8AB4F8] text-black text-[14px] rounded-3xl px-[20px] py-[10px] flex left-[50%] translate-x-[-50%] z-1"
      >
        {isLoading ? "Loading..." : "Explore"}
      </button>
    </div>
  );
};

export default SearchBar;
