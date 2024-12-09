import React, { useState } from "react";

export const WhenToVisit = () => {
  const [startIndex, setStartIndex] = useState(0);
  const rowsToShow = 3;

  const handleShowMore = () => {
    if (startIndex + rowsToShow < data.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handleShowLess = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const data = [
    { month: "November", hiLo: "23° / 19°", popularity: 3 },
    { month: "December", hiLo: "20° / 15°", popularity: 4 },
    { month: "January", hiLo: "18° / 14°", popularity: 5 },
    { month: "February", hiLo: "25° / 20°", popularity: 2 },
    { month: "March", hiLo: "22° / 18°", popularity: 3 },
    { month: "April", hiLo: "20° / 15°", popularity: 4 },
  ];

  return (
    <div className=" text-white p-6 bg-[#202125] rounded-lg w-full h-full">
      <h2 className="text-lg font-semibold text-center">When to visit</h2>
      <p className="text-center text-sm text-gray-400 mb-4">
        Get ideas for the best time to go
      </p>
      <div className="flex justify-around items-center mb-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center"></div>
          <p className="text-sm mt-2 font-medium">Peak season</p>
          <p className="text-xs text-gray-400">Mar, Oct – Dec</p>
          <p className="text-xs text-gray-400">
            Most popular and higher prices
          </p>
        </div>
        <div className="w-[1px] bg-gray-600 h-16"></div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center"></div>
          <p className="text-sm mt-2 font-medium">Off-season</p>
          <p className="text-xs text-gray-400">Apr – Jul</p>
          <p className="text-xs text-gray-400">Less popular and lower prices</p>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-4">
        {data.slice(startIndex, startIndex + rowsToShow).map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-600"
          >
            <p>{item.month}</p>
            <p className="text-gray-400">{item.hiLo}</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < item.popularity ? "bg-blue-500" : "bg-gray-500"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          className={`px-[11px] py-[8px] rounded-full text-center text-sm ${
            startIndex > 0 ? "text-blue-500 hover:bg-[#555]" : "text-gray-500"
          }`}
          onClick={handleShowLess}
          disabled={startIndex <= 0}
        >
          {"▲"}
        </button>
        <button
          className={`px-[11px] py-[8px] rounded-full text-center text-sm ${
            startIndex + rowsToShow < data.length
              ? "text-blue-500 hover:bg-[#555]"
              : "text-gray-500"
          }`}
          onClick={handleShowMore}
          disabled={startIndex + rowsToShow >= data.length}
        >
          {"▼"}
        </button>
      </div>
    </div>
  );
};

export default WhenToVisit;
