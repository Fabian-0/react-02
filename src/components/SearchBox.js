import React, { useState } from 'react';


function SearchBox({ handlerSearch }) {
	const [location, setLocation] = useState();

	return (
		<div className="search">
			<input
				className="search__input"
				type="search"
				name="search"
				placeholder="Location name"
				onChange={(e) => setLocation(e.target.value)}
			/>
			<div className="search__buttons">
				<button
					type="button"
					className="search__button"
					onClick={() => handlerSearch(Date.now())}
				>
					Search
				</button>
				<button
					type="button"
					className="search__button"
					onClick={() => handlerSearch(Date.now())}
				>
					Random Location
				</button>
			</div>
    </div>
	);
}

export default SearchBox;