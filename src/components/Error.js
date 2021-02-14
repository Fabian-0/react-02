import React from "react";

function Error({ error }) {
  return (
    <div className="catchError">
      <p className="errorType">{error}</p>
    </div>
  );
}

export default Error;
