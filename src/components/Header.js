import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Rick and Morty Locations{" "}
        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="header__link"
        >
          APPI
        </a>
      </h1>
    </header>
  );
}

export default Header;
