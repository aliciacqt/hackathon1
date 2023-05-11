import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";

function Map({ position }) {
  // Définir le niveau de zoom par défaut de la carte
  const defaultZoomLevel = 16;

  // Définir l'état de l'erreur de géolocalisation
  const [errorMessage, setErrorMessage] = useState(null);

  // Référence à l'élément de la carte
  const mapElementRef = useRef(null);

  // Définir l'état de la position actuelle
  const [currentPosition, setCurrentPosition] = useState(position);

  // Mettre à jour la position actuelle lorsque la propriété position est modifiée
  useEffect(() => {
    setCurrentPosition(position);
  }, [position]);

  // Animer la carte vers la nouvelle position actuelle
  useEffect(() => {
    if (mapElementRef.current) {
      mapElementRef.current.flyTo(currentPosition, defaultZoomLevel);
    }
  }, [currentPosition]);

  // Obtenir la position actuelle de l'utilisateur
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

  // Rendre l'erreur de géolocalisation si elle existe
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  // Rendre la carte
  return (
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
  );
}

// Propriétés valides pour le composant Map
Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
};

// Propriétés par défaut pour le composant Map
Map.defaultProps = {
  position: [48.858093, 2.2946944],
};

export default Map;
