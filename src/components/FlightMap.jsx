import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { countryCoordinates } from "../data/country";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMobile } from "../hooks/useMobile";

const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.freepik.com/512/2873/2873022.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const FlightMap = ({ itineraries }) => {
  const origin = itineraries[0]?.legs[0]?.origin;
  const originCoordinates =
    countryCoordinates[origin?.country.split(" ").join("")];

  if (!originCoordinates) {
    console.error("Not found!");
    return null;
  }

  const connections = itineraries
    .map((flight) => {
      const leg = flight.legs[0];
      const destination = leg.destination.country;
      const airport = leg.destination.name;

      const coordinates = countryCoordinates[destination.split(" ").join("")];
      if (!coordinates) {
        return null;
      }

      return {
        id: flight.id,
        city: destination,
        airport,
        lat: coordinates.lat,
        lng: coordinates.lng,
      };
    })
    .filter(Boolean);

  return (
    <MapContainer
      center={[originCoordinates.lat, originCoordinates.lng]}
      zoom={3}
      style={{
        height: "100vh",
        width: "100%",
        zIndex: 0,
        position: "relative",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={[originCoordinates.lat, originCoordinates.lng]}
        icon={customIcon}
      >
        <Popup>
          {origin?.city} - {origin?.name}
        </Popup>
      </Marker>
      {connections.map((destination) => (
        <div key={destination.id}>
          <Marker
            position={[destination.lat, destination.lng]}
            icon={customIcon}
          >
            <Popup>
              {destination.city} - {destination.airport}
            </Popup>
          </Marker>
          <Polyline
            positions={[
              [originCoordinates.lat, originCoordinates.lng],
              [destination.lat, destination.lng],
            ]}
            color="blue"
          />
        </div>
      ))}
    </MapContainer>
  );
};

export default FlightMap;
