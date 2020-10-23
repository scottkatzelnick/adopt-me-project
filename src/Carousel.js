import React from 'react';

//=> Class component that renders photos carousel animal detail's page
class Carousel extends React.Component {
	//=> Instaniates empyt arr and active attribute
	state = {
		photos: [],
		active: 0,
	};

	//=> Retrieves photos from API call
	static getDerivedStateFromProps({ media }) {
		//* Default photos if API returns none
		let photos = ['http://placecorgi.com/600/600'];

		if (media.length) {
			photos = media.map(({ large }) => large);
		}

		return { photos };
	}

	//=> Gives photo active attribute if clicked on
	handleIndexClick = (event) => {
		this.setState({
			//=> +event coerces value into Number data-type
			active: +event.target.dataset.index,
		});
	};

	render() {
		//=> Makes arr, attribute reachable
		const { photos, active } = this.state;

		return (
			<div className="carousel">
				<img src={photos[active]} alt="animal" />
				<div className="carousel-smaller">
					{photos.map((photo, index) => (
						//=> Allows us to bypass keyboard accessibility requirements (i.e. onKeyUp )
						// eslint-disable-next-line
						<img
							key={photo}
							onClick={this.handleIndexClick}
							data-index={index}
							src={photo}
							className={index === active ? 'active' : ''}
							alt="animal thumbnail"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
