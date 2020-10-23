import React from 'react';

//=> Functional Pet component to render search results
export default function Pet({ name, animal, breed, media, location, id }) {
	//=> Defualt photo if API doesn't return one
	let hero = 'http://placecorgi.com/300/300';

	//=> Making sure it's a smaller photo
	if (media.length) {
		hero = media[0].small;
	}

	//=> Actual rendering of search results for each animal
	return (
		<a href={`details/${id}`} className="pet">
			<div className="image-container">
				<img src={hero} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</a>
	);
}
