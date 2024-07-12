import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconLocation from "/images/icon-location.svg";
//{ lat = 34.08057, lng = -118.07285 }
function Map({ data }) {
  const position = [
    data?.location?.lat ?? 34.08057,
    data?.location?.lng ?? -118.07285,
  ];
  const icon = L.icon({
    iconUrl: iconLocation,
    iconSize: [30, 35],
    iconAnchor: [12, 45],
  });

  return (
    <MapContainer
      key={JSON.stringify(position)}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={icon}>
        <Popup>
          Latitude: {position[0]} <br /> Longitude: {position[1]}
          <br />
          {data?.location?.region || ""}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
