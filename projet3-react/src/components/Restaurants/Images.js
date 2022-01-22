import React from 'react';

const Images = (props) => {
	return (
		<div className='image'>
			<img src={props.restaurantImg} alt={props.restaurant} className='image__background' />
		</div>
	);
};

export default Images;
