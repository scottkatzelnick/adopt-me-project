import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

//=> Class Component to render details page for animal
class Details extends React.Component {
	state = { loading: true };

	//=> Sets the variables equal to the api values based on animal id
	componentDidMount() {
		// throw new Error('lol');  //=> Uncomment to test ErrorBoundary component
		pet.animal(this.props.id).then(({ animal }) => {
			this.setState({
				name: animal.name,
				animal: animal.type,
				location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
				description: animal.description,
				media: animal.photos,
				breed: animal.breeds.primary,
				loading: false,
			});
		}, console.error);
	}
	//=> While the API call is loading show a loading message
	render() {
		if (this.state.loading) {
			return <h1>loading ...</h1>;
		}

		//=> Make the variables reachable for the return statement
		const { animal, breed, location, description, name, media } = this.state;

		//=> Render details UI
		return (
			<div className="details">
				<Carousel media={media} />
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed} - ${location}`}</h2>
					<button>Adopt {name}</button>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

//=> Sends the details page to the App component with an ErrorBoundary
//=> component to catch any errors with ability to redirect users back
//=> to the main page
export default function DetailsWithErrorBoundary(props) {
	return (
		<ErrorBoundary>
			<Details {...props} />
		</ErrorBoundary>
	);
}
