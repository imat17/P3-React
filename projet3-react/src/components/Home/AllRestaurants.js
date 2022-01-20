import React, { Component } from 'react';
import { restaurantsList } from '../../data/restaurantsList';
import Restaurant from './Restaurant';
class AllRestaurants extends Component {
	state = {
		restaurants: restaurantsList,
	};
	render() {
		let { restaurants } = this.state;
		return (
			<section className='restaurant'>
				<h3 className='restaurant__title'>Restaurants</h3>
				<div className='restaurant__test'>
					{restaurants.map((item) => {
						return <Restaurant key={item.id} item={item} />;
					})}
				</div>
			</section>
		);
	}
}

export default AllRestaurants;
