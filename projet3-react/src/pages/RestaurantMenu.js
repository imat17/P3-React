import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Images from '../components/Restaurants/Images';
import AllMenus from '../components/Restaurants/AllMenus';
import { menuList } from '../data/menuList';
import { useLocation } from 'react-router-dom';

const RestaurantMenu = () => {
	console.log(menuList);
	const { search } = useLocation();
	const idRestaurant = new URLSearchParams(search).get('id');
	const targetedRestaurant = menuList.filter(
		(restaurant) => restaurant.id.toString() === idRestaurant
	)[0];
	console.log(targetedRestaurant);
	return (
		<div>
			<Header />
			<Images restaurantImg={targetedRestaurant.picture} />
			<section className='menu'>
				<AllMenus restaurantName={targetedRestaurant.restaurant} />
			</section>
			<Footer />
		</div>
	);
};

export default RestaurantMenu;
