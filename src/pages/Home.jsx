import SearchBar from "../components/SearchBar";
import React from "react";

const Home = () => {
  return (
    <div className="w-full md:px-[20px] flex items-center justify-center flex-col">
      <div className="w-full h-[136px] md:h-[17.708vw] lg:h-full  z-[100] relative mb-0 lg:mb-[40px]">
        <img
          src={
            "https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg"
          }
          className="w-full h-[136px] md:h-[17.708vw] lg:h-full object-cover  z-[100]"
        />
        <h1 className="absolute bottom-0 left-[50%] translate-x-[-50%] text-[56px]">
          Flights
        </h1>
      </div>

      <SearchBar />
    </div>
  );
};

export default Home;
