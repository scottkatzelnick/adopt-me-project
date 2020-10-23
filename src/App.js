import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Details';

//=> Renders page elements as main App component
//* Uses Reach/Router for page navigation
const App = () => {
	return (
		<React.StrictMode>
			<div>
				<header>
					<Link to="/">Adopt Me!</Link>
				</header>
				<Router>
					<SearchParams path="/" />
					<Details path="/details/:id" />
				</Router>
			</div>
		</React.StrictMode>
	);
};

//=> Inserts App component elements into div with id="root" in index.html
render(<App />, document.getElementById('root'));
