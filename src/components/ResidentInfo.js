import React from "react";

function ResidentInfo({ name, image, status, origin, episodes }) {
  return (
    <div className="results__residents-card">
      <img className="results__residents-img" src={image} alt={name} />
      <p className="results__residents-texts">
        <span className="residents-span">Name: </span>
        {name}
      </p>
      <p className="results__residents-texts">
        <span className="residents-span">Status: </span>
        {status}
      </p>
      <p className="results__residents-texts">
        <span className="residents-span">Origin: </span>
        {origin}
      </p>
      <p className="results__residents-texts">
        <span className="residents-span">Number of appearances: </span>
        {episodes}
      </p>
    </div>
  );
}

export default ResidentInfo;