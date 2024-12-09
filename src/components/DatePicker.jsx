import React, { useState, useRef, useEffect } from "react";
import "../style/datePickerStyle.css";

const DatePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  sidebar,
}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [selectedStartDate, setSelectedStartDate] = useState(startDate || null);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate || null);
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
      <div className="bg-[#555]">
        <div className="calendar-header">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <div className="calendar-grid">
          {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
            <div key={day} className="w-full h-full text-center text-[#aaa]">
              {day}
            </div>
          ))}
          {dates.map((date, index) => (
            <div
              key={index}
              className={`w-full h-full text-center cursor-pointer rounded-full ${
                date &&
                (date.toDateString() === selectedStartDate?.toDateString() ||
                  date.toDateString() === selectedEndDate?.toDateString())
                  ? "bg-[#1a73e8]"
                  : date &&
                    selectedStartDate &&
                    selectedEndDate &&
                    date > selectedStartDate &&
                    date < selectedEndDate
                  ? "bg-[#394457]"
                  : ""
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

  return (
    <div
      className="w-full relative  bg-[#3A3B3F] h-full border-[1px] rounded-md border-[#555]"
      ref={datePickerRef}
    >
      <div
        className=" flex w-full items-center justify-between p-[10px] rounded-md "
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
          className={`absolute ] top-[44px] bg-[#555] p-[10px] rounded-md ${
            sidebar ? "left-0 z-10 w-full " : "right-0 w-full lg:w-[650px]"
          }`}
        >
          <div className="bg-[#555]">
            <div className="toggle-trip-type">
              <button
                className={`trip-type-button ${!isRoundTrip ? "active" : ""}`}
                onClick={() => setIsRoundTrip(false)}
              >
                One Way
              </button>
              <button
                className={`trip-type-button ${isRoundTrip ? "active" : ""}`}
                onClick={() => setIsRoundTrip(true)}
              >
                Round Trip
              </button>
            </div>
            <div className="w-full p-[10px] flex gap-[20px] bg-[#555] flex-col">
              {renderCalendar(0)}
              {renderCalendar(1)}
            </div>
          </div>
          <div className="w-full border-t-[1px] p-[10px] flex items-center justify-end">
            <button
              onClick={() => setDatePickerVisible(false)}
              className="p-[10px] bg-[#8AB4F8] text-black rounded-3xl text-[14px] px-[20px]"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
