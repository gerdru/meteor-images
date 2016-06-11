import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
	// props.image => this is the image object passed from image_list.js
	// props.image.title
	// props.image.link

	return (
		<li className="media list-group-item">
			<div className="pull-left">
				<img src={props.image.link} />
			</div>
			<div>
				<h4 className="media-heading">{props.image.title}</h4>
				<p className="media-body">{props.image.description}</p>
				<ImageScore ups={props.image.ups} downs={props.image.downs} />
			</div>
		</li>
	);
};

export default ImageDetail;