import { formatNumber, getCheckoutDate } from "../utility/helper";
import { FlightSideBarButton } from "./FlightSideBarButton";
import React, { useState, useEffect } from "react";
import { fetchData } from "../utility/fetcher";
import useFlight from "../hooks/useFlight";
import { StarRating } from "./StarRating";

export const HotelsOnFlightSideBar = () => {
  const { flightParams } = useFlight();
  const [hotels, setHotels] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("hotels");

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const endpoint = "v1/hotels/searchHotels";
        const params = {
          entityId: flightParams?.destinationEntityId,
          checkin: flightParams.date,
          checkout: getCheckoutDate(flightParams),
          adults: flightParams.adults,
          rooms: 1,
          limit: "10",
          currency: flightParams.currency,
          market: flightParams.market,
          countryCode: flightParams.countryCode,
        };

        const response = await fetchData(endpoint, params);

        setHotels(response.data);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [flightParams]);

  if (loading) {
    return <div>Loading hotels...</div>;
  }

  return (
    <div className="p-4 bg-[#202125] rounded-md shadow-md text-white">
      <div className="py-[20px]">
        <h2 className="text-xl font-semibold  text-center text-[20px] ">
          Stays
        </h2>
        <p className="text-sm text-gray-400 mb-2 text-center">
          {flightParams?.date && getCheckoutDate(flightParams)
            ? `${new Date(flightParams.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })} - ${new Date(
                getCheckoutDate(flightParams)
              ).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })} · ${Math.ceil(
                (new Date(getCheckoutDate(flightParams)) -
                  new Date(flightParams.date)) /
                  (1000 * 60 * 60 * 24)
              )} nights`
            : "Select dates to see stays"}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className={`px-4 py-2 border-[1px] border-[#5F6368] rounded-l-md ${
            selectedCategory === "hotels"
              ? "bg-[#394457] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedCategory("hotels")}
        >
          Hotels
        </button>
        <button
          className={`px-4 py-2 border-[1px] border-[#5F6368] rounded-r-md ${
            selectedCategory === "holidayRentals"
              ? "bg-[#394457] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedCategory("holidayRentals")}
        >
          Holiday Rentals
        </button>
      </div>
      <div className="mt-4">
        {hotels?.hotels.slice(0, 3).map((hotel) => (
          <div
            key={hotel.hotelId}
            className="hover:bg-[#394457] p-4 rounded-md flex items-start gap-4"
          >
            <img
              src={hotel.heroImage}
              alt={hotel.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-[14px]">{hotel.name}</h3>
              {/* <p className="text-sm text-gray-300">
                {hotel.distance || "No distance available"}
              </p> */}
              {hotel.rating && (
                <div className="flex gap-[4px] items-center justify-start">
                  <p className="text-sm text-green-400">{hotel.rating.value}</p>
                  <StarRating
                    value={hotel?.reviewSummary?.confidenceBadge?.score}
                  />
                  <p>({formatNumber(hotel.rating.count)})</p>
                </div>
              )}
            </div>
            {hotel.price && (
              <p className="font-semibold  text-[14px]">{hotel.price}</p>
            )}
          </div>
        ))}
      </div>
      <FlightSideBarButton label={"View more hotels"} />
    </div>
  );
};
