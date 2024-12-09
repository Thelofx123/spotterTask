import React, { useState, useRef, useEffect } from "react";
import "../style/datePickerStyle.css";

const DatePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  sidebar,
}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(startDate || null);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate || null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [currentMonthOffset, setCurrentMonthOffset] = useState(0);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const datePickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setDatePickerVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateClick = (date) => {
    if (!isRoundTrip) {
      setSelectedStartDate(date);
      setStartDate(date);
    } else {
      if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
        setSelectedStartDate(date);
        setStartDate(date);
        setSelectedEndDate(null);
        setEndDate(null);
      } else if (
        selectedStartDate &&
        !selectedEndDate &&
        date < selectedStartDate
      ) {
        setSelectedEndDate(selectedStartDate);
        setEndDate(selectedStartDate);
        setSelectedStartDate(date);
        setStartDate(date);
      } else if (
        selectedStartDate &&
        !selectedEndDate &&
        date > selectedStartDate
      ) {
        setSelectedEndDate(date);
        setEndDate(date);
      }
    }
  };

  const renderCalendar = (monthOffset) => {
    const today = new Date();
    const currentMonth = new Date(
      today.getFullYear(),
      today.getMonth() + monthOffset,
      1
    );
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();

    const dates = [];
    for (let i = 0; i < firstDay; i++) {
      dates.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      dates.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      );
    }

    return (
      <div className="bg-[#555] w-full">
        <div className="calendar-header text-center font-semibold text-lg">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <div className="calendar-grid grid grid-cols-7 gap-2 text-center text-sm">
          {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
            <div key={day} className="text-[#aaa]">
              {day}
            </div>
          ))}
          {dates.map((date, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-full ${
                date &&
                (date.toDateString() === selectedStartDate?.toDateString() ||
                  date.toDateString() === selectedEndDate?.toDateString())
                  ? "bg-[#1a73e8] text-white"
                  : date &&
                    selectedStartDate &&
                    selectedEndDate &&
                    date > selectedStartDate &&
                    date < selectedEndDate
                  ? "bg-[#394457]"
                  : "hover:bg-[#666]"
              }`}
              onClick={() => date && handleDateClick(date)}
            >
              {date ? date.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handlePreviousMonth = () => {
    setCurrentMonthOffset((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthOffset((prev) => prev + 1);
  };

  return (
    <div
      className="relative bg-[#3A3B3F] z-[100] border-[1px] w-full rounded-md border-[#555]"
      ref={datePickerRef}
    >
      <div
        className="flex  items-center justify-between p-4 bg-[#202125] rounded-md cursor-pointer"
        onClick={() => setDatePickerVisible(!isDatePickerVisible)}
      >
        <span>
          {selectedStartDate ? selectedStartDate.toDateString() : "Start Date"}
        </span>
        <span>|</span>
        {isRoundTrip && (
          <span>
            {selectedEndDate ? selectedEndDate.toDateString() : "Return"}
          </span>
        )}
      </div>
      {isDatePickerVisible && (
        <div
          className={`absolute top-[44px] bg-[#555] py-[20px] rounded-md ${
            sidebar ? "left-0 z-10 w-full" : "right-0 w-full lg:w-[650px]"
          }`}
        >
          <div className="bg-[#555] flex flex-col gap-4">
            <div className="toggle-trip-type flex justify-around">
              <button
                className={`px-4 py-2 rounded-full ${
                  !isRoundTrip ? "bg-[#1a73e8] text-white" : "bg-transparent"
                }`}
                onClick={() => setIsRoundTrip(false)}
              >
                One Way
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  isRoundTrip ? "bg-[#1a73e8] text-white" : "bg-transparent"
                }`}
                onClick={() => setIsRoundTrip(true)}
              >
                Round Trip
              </button>
            </div>
            <div className="flex relative items-center justify-between">
              <button
                className="text-blue-500 hover:bg-[#444] absolute left-[-10px]  p-2 rounded-full"
                onClick={handlePreviousMonth}
              >
                {"<"}
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4">
                {renderCalendar(currentMonthOffset)}
                {renderCalendar(currentMonthOffset + 1)}
              </div>
              <button
                className="text-blue-500 hover:bg-[#444] p-2 rounded-full absolute right-[-10px]"
                onClick={handleNextMonth}
              >
                {">"}
              </button>
            </div>
            <div className="flex justify-between mt-4 px-4">
              <button className="text-sm text-gray-400">Reset</button>
              <button
                onClick={() => setDatePickerVisible(false)}
                className="p-2 bg-[#8AB4F8] text-black rounded-full"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
