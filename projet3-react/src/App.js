import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importation des pages
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';


const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
