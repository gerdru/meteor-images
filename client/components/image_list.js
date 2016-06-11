// create image list component
// Import react
import React from 'react';
import ImageDetail from './image_detail'
import axios from 'axios';

// // create a static image list (dummy data)
// const IMAGES = [
// 	{title: 'Pen', link: 'http://dummyimage.com/600x400'},
// 	{title: 'Pine Tree', link: 'http://dummyimage.com/600x400'},
// 	{title: 'Mug', link: 'http://dummyimage.com/600x400'}
// ]

// Create the component
// Inside JSX use {varName} to reference js variables or objects
// passing properties from parent to child: props

const ImageList = (props) => {
	const validImages = props.images.filter(image => !image.is_album);
	// RenderedImages is an array of components
	const RenderedImages = validImages.map( image =>  // the same as function(image)...
			// return keyword not needed if there is only one js statement (ES6)
			<ImageDetail key={image.title} image={image}/>
		)

	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

// Export our component
export default ImageList;