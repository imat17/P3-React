import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../components/Restaurants/Images';
import { menuList } from '../data/menuList';
import { useLocation } from 'react-router-dom';

const RestaurantMenu = (props) => {
	console.log(menuList);
	const { search } = useLocation();
	const idRestaurant = new URLSearchParams(search).get('id');
	const targetedRestaurant = menuList.filter(
		(restaurant) => restaurant.id.toString() === idRestaurant[0]
	);
	return (
		<div>
			<Header />
			<Image restaurantImg={targetedRestaurant.picture} />
			<Footer />
		</div>
	);
};

export default RestaurantMenu;
