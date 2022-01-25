import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Images from '../components/Restaurants/Images';
import MenusContainer from '../components/Restaurants/MenusContainer';
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
			<Header arrowDisplay = {true}/>
			<Images restaurantImg={targetedRestaurant.picture} />
			<section className='menu'>
				<MenusContainer
					restaurantName={targetedRestaurant.restaurant}
					restaurantMenu={targetedRestaurant.menus}
				/>
				<Button />
			</section>
			<Footer />
		</div>
	);
};

export default RestaurantMenu;
