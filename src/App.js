import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import LocationContainer from "./components/LocationContainer";
import Header from "./components/Header";

function App() {
  const [location, setLocation] = useState("");

  const handlerSearch = (locationSearch) => {
    return setLocation(locationSearch);
  };

  return (
    <div className="App">
      <Header />
      <SearchBox handlerSearch={handlerSearch} />
      <LocationContainer locationSearch={location} />
    </div>
  );
}

export default App;
