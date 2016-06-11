// any js here is automatically run for us

// Import the React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// Create a component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { images: [] };
	}

	componentWillMount(){
		// Fantastic place to load data!
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
			.then(response => this.setState({ images: response.data.data}));

	}

	render() {
		return(
			<div>
				<ImageList images={this.state.images}/>
			</div>
		);
	}
};

// render this component to the screen
// Meteor.startup() executes after all HTML elements are loaded in the DOM
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});
