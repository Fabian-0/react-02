import React from "react";

function LocationInfo({ name, type, dimension, residents }) {
  return (
    <div className="results__location">
      <p className="results__location-texts">
        <span className="location-span">Location:</span> {name}
      </p>
      <p className="results__location-texts">
        <span className="location-span">Type:</span> {type}
      </p>
      <p className="results__location-texts">
        <span className="location-span">Dimension:</span> {dimension}
      </p>
      <p className="results__location-texts">
        <span className="location-span">Number of residents:</span> {residents}
      </p>
    </div>
  );
}

export default LocationInfo;
