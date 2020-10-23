//* mostly code from reactjs.org/docs/error-boundries.html
import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

//=> Class component for catching errors
class ErrorBoundary extends Component {
	state = { hasError: false, redirect: false };
	static getDerivedStateFromError() {
		return { hasError: true };
	}

	//=> Display error in console
	componentDidCatch(error, info) {
		console.error('ErrorBoundary caught an error!', error, info);
	}

	//=> Redirect timer
	componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 5000);
		}
	}

	//=> Displays error msg on screen and redirects to main page
	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}

		if (this.state.hasError) {
			return (
				<h1>
					There was an error with this listing. <Link to="/">Click here</Link> to go back
					to the homepage, or wait five seconds.
				</h1>
			);
		}

		//=> Passes html elements through if there's no error
		return this.props.children;
	}
}

export default ErrorBoundary;
