import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";
import ResidentsPaginacion from "./ResidentsPagination";
import Error from "./Error";

function ResidentContainer({ residentsLinks }) {
  const [residentsData, setResidentsData] = useState([]);
  const [residentsElements, setResidentsElements] = useState([]);
  const [residentsPage, setResidentsPage] = useState(0);

  const getResidents = (arrayResidents) => {
    return new Promise((resolve, reject) => {
      if (arrayResidents.length) {
        const fetchResidents = arrayResidents;
        let residentsPromises = [];
        for (let i = 0; i < fetchResidents.length; i++) {
          residentsPromises[i] = fetch(fetchResidents[i])
            .then((res) => res.json())
            .then((res) => res);
        }
        Promise.all(residentsPromises).then((res) => resolve(res));
      } else {
        reject(false);
      }
    });
  };

  const generateData = (residents) => {
    const residentsElementsArray = residents.map((value) => {
      return (
        <ResidentInfo
          key={value.id}
          name={value.name}
          image={value.image}
          status={value.status}
          origin={value.origin.name}
          episodes={value.episode.length}
        />
      );
    });
    setResidentsElements(residentsElementsArray);
  };

  useEffect(() => {
    getResidents(residentsLinks).then(
      (res) => {
        setResidentsPage(0);
        setResidentsData(res);
      },
      (err) => setResidentsElements(err)
    );
  }, [residentsLinks]);

  useEffect(() => {
    const numberOfElements = 8;
    const residentsToGenerate = [
      residentsPage * numberOfElements,
      numberOfElements * (residentsPage + 1),
    ];
    const print = residentsData.slice(
      residentsToGenerate[0],
      residentsToGenerate[1]
    );
    generateData(print);
  }, [residentsPage, residentsData]);

  return (
    <>
      {residentsElements && (
        <div className="results__residents">
          {residentsElements}
          <ResidentsPaginacion
            numberOfPages={Math.ceil(residentsLinks.length / 8)}
            handlerChangePage={setResidentsPage}
          />
        </div>
      )}
      {!residentsElements && <Error error={"No residents"} />}
    </>
  );
}

export default ResidentContainer;
