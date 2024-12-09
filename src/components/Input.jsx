import React, { useState, useRef, useEffect } from "react";
import "../style/inputStyle.css";
import { fetchData } from "../utility/fetcher";
import { debounce } from "../utility/helper";

const InputWithDropdown = ({
  inputValue,
  setInputValue,
  data = [],
  label,
  initialValue,
  setInitialValue,
  placeholder,
  sidebar,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [groupedData, setGroupedData] = useState({});
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const groupDataByHierarchy = (data) => {
    const hierarchy = {};

    data.forEach((item) => {
      const country = item.presentation.subtitle || item.presentation.title;
      const city = item.navigation.relevantHotelParams.localizedName;

      if (!hierarchy[country]) {
        hierarchy[country] = {};
      }

      if (!hierarchy[country][city]) {
        hierarchy[country][city] = [];
      }

      if (item.navigation.entityType === "AIRPORT") {
        hierarchy[country][city].push(item);
      }
    });

    Object.keys(hierarchy).forEach((country) => {
      Object.keys(hierarchy[country]).forEach((city) => {
        if (hierarchy[country][city].length === 0) {
          delete hierarchy[country][city];
        }
      });
      if (Object.keys(hierarchy[country]).length === 0) {
        delete hierarchy[country];
      }
    });

    return hierarchy;
  };

  const searchAirport = async (query) => {
    setLoading(true);
    const endpoint = "v1/flights/searchAirport";
    const params = {
      query,
      locale: "en-US",
    };

    try {
      const response = await fetchData(endpoint, params);
      const grouped = groupDataByHierarchy(response.data || []);
      setGroupedData(grouped);
    } catch (error) {
      console.error("Error fetching airport data:", error);
      setGroupedData({});
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useRef(debounce(searchAirport, 500)).current;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim()) {
      debouncedSearch(value);
    } else {
      setGroupedData(groupDataByHierarchy(data));
    }
  };
  return (
    <div
      className={` ${
        sidebar ? "w-full" : "w-full lg:w-[282px]"
      } border-[1px] relative border-[#555] rounded-md  bg-[#3A3B3F]`}
      ref={dropdownRef}
    >
      <input
        type="text"
        className="styled-input"
        value={loading ? "Loading..." : inputValue}
        placeholder={placeholder}
        disabled={loading}
        onFocus={() => setDropdownVisible(true)}
        onChange={handleInputChange}
      />
      <div className="label-container">
        {!isDropdownVisible && inputValue !== "" && (
          <span className="label">{initialValue?.skyId || label || ""}</span>
        )}
      </div>
      {isDropdownVisible && (
        <div className="w-full absolute bg-[#555] max-h-[500px] overflow-scroll rounded-lg">
          {Object.keys(groupedData).map((country) => (
            <div key={country} className="dropdown-country">
              {Object.keys(groupedData[country]).map((city) => (
                <div key={city} className="dropdown-city">
                  <div className="dropdown-item city-header">
                    {city}
                    <p>
                      {
                        groupedData[country][city][0]?.navigation
                          ?.relevantHotelParams?.entityType
                      }{" "}
                      of {country}
                    </p>
                  </div>
                  {groupedData[country][city].map((airport) => (
                    <div
                      key={airport.entityId}
                      className="dropdown-item airport-item"
                      onClick={() => {
                        setInputValue(
                          airport.presentation.suggestionTitle ||
                            airport.presentation.title
                        );
                        setInitialValue(airport);
                        setDropdownVisible(false);
                      }}
                    >
                      ✈️{" "}
                      {airport.presentation.suggestionTitle ||
                        airport.presentation.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          {!loading && Object.keys(groupedData).length === 0 && (
            <div className="dropdown-item">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputWithDropdown;
