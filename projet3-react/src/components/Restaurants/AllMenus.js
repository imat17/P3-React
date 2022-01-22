import React from 'react';

const AllMenus = (props) => {
	return (
		<div className='menu__title'>
			<h3 className='menu__name rob'>{props.restaurantName}</h3>
			<span className='menu__icon'>
				<i className='far fa-heart'></i>
			</span>
			<span className='menu__icon--animation'>
				<i className='fas fa-heart'></i>
			</span>
		</div>
	);
};

export default AllMenus;
