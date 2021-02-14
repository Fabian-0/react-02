import React, { useEffect, useState } from "react";
import LocationInfo from "./LocationInfo";
import ResidentContainer from "./ResidentContainer";
import Error from "./Error";

function LocationContainer({ locationSearch }) {
  const [allData, setAllData] = useState([]);
  const [locationShow, setLocationShow] = useState(false);

  const getRandomIndex = (arrLength) => Math.floor(Math.random() * arrLength);

  const findLocation = (resultsData, locSearch) => {
    for (let i = 0; i < resultsData.length; i++) {
      const resultSearch = resultsData[i].find(
        (element) => locSearch.toLowerCase() == element.name.toLowerCase()
      );
      if (resultSearch && resultSearch != -1) {
        return resultSearch;
      }
    }
    return false;
  };

  useEffect(() => {
    const searchAllLocations = (link, arrayPromises = []) => {
      return new Promise((resolve, reject) => {
        if (link) {
          fetch(link)
            .then((res) => res.json())
            .then((res) => {
              const isLast =
                res.info.count == res.results[res.results.length - 1].id
                  ? true
                  : false;
              const isNext = res.info.next;
              if (isNext || isLast) {
                arrayPromises.push(res.results);
                resolve(searchAllLocations(isNext, arrayPromises));
              }
            });
        } else if (arrayPromises.length) {
          setAllData(arrayPromises);
          resolve(arrayPromises);
        } else {
          reject(false);
        }
      });
    };
    searchAllLocations("https://rickandmortyapi.com/api/location").then(
      (res) => {
        const randomLocation = generateRandomLocation(res);
        setLocationShow(randomLocation);
      }
    );
  }, []);

  const generateRandomLocation = (data) => {
    const randomIndex = getRandomIndex(data.length);
    return data[randomIndex][getRandomIndex(data[randomIndex].length)];
  };

  useEffect(() => {
    if (typeof locationSearch == "number") {
      const randomLocation = generateRandomLocation(allData);
      setLocationShow(randomLocation);
    } else {
      const resultSearchLocation = findLocation(allData, locationSearch);
      if (resultSearchLocation) {
        setLocationShow(resultSearchLocation);
      } else {
        setLocationShow(false);
      }
    }
  }, [locationSearch]);

  if (allData == false) {
    return <Error error={"Failed to fetch"} />;
  }
  return (
    <>
      {locationShow && (
        <>
          <LocationInfo
            name={locationShow.name}
            type={locationShow.type}
            dimension={locationShow.dimension}
            residents={locationShow.residents.length}
          />
          <ResidentContainer residentsLinks={locationShow.residents} />
        </>
      )}
      {!locationShow && <Error error={"Undefined location"} />}
    </>
  );
}

export default LocationContainer;
