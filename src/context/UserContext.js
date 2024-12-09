import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../utility/fetcher";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [nearbyAirports, setNearbyAirports] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error:", error);
        }
      );
    } else {
      console.error("Not supported.");
    }
  };

  const fetchNearbyAirports = async (latitude, longitude) => {
    setLoading(true);
    const endpoint = "v1/flights/getNearByAirports";
    const params = {
      lat: latitude,
      lng: longitude,
      locale: "en-US",
    };

    try {
      const data = await fetchData(endpoint, params);
      setNearbyAirports(data?.data || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location;
      fetchNearbyAirports(latitude, longitude);
    }
  }, [location]);

  useEffect(() => {
    fetchUserLocation();
  }, []);

  return (
    <UserContext.Provider
      value={{
        location,
        nearbyAirports,
        loading,
        fetchUserLocation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
