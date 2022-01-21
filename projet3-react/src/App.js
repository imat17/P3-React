import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importation des pages
import Home from './pages/Home';
import RestaurantMenu from './pages/RestaurantMenu';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='restaurant' element={<RestaurantMenu />} />
			</Routes>
		</>
	);
};

export default App;
