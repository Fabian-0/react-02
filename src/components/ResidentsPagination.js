import React, { useEffect, useState } from "react";

function ResidentsPaginacion({ numberOfPages, handlerChangePage }) {
  const [elements, setElements] = useState([]);

  const generatePages = (numberOfCircles) => {
    let arrayElements = [];
    for (let i = 0; i < numberOfCircles; i++) {
      arrayElements.push(
        <span
          key={i}
          className="residents__pagination-number"
          onClick={() => handlerChangePage(i)}
        >
          {i + 1}
        </span>
      );
    }
    setElements(arrayElements);
  };

  useEffect(() => {
    if (numberOfPages) {
      generatePages(numberOfPages);
    }
  }, [numberOfPages]);

  return (
    <div className="residents__pagination">{elements.length && elements}</div>
  );
}

export default ResidentsPaginacion;
