import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "./MapApi.scss";

function Map({ position }) {
  const defaultZoomLevel = 16;

  const [errorMessage, setErrorMessage] = useState(null);

  const mapElementRef = useRef(null);

  const [currentPosition, setCurrentPosition] = useState(position);

  useEffect(() => {
    setCurrentPosition(position);
  }, [position]);

  useEffect(() => {
    if (mapElementRef.current) {
      mapElementRef.current.flyTo(currentPosition, defaultZoomLevel);
    }
  }, [currentPosition]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (positionData) => {
        const { latitude, longitude } = positionData.coords;
        setCurrentPosition([latitude, longitude]);
      },
      (error) => {
        setErrorMessage(error.message);
      }
    );
  }, []);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="map">
      <MapContainer
        center={currentPosition}
        zoom={defaultZoomLevel}
        style={{ height: "400px" }}
        ref={mapElementRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={currentPosition}>
          <Popup>Your current position</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
};

Map.defaultProps = {
  position: [48.858093, 2.2946944],
};

export default Map;
