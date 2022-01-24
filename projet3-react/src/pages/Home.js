import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explore from '../components/Home/Explore';
import List from '../components/Home/List';
import AllRestaurants from '../components/Home/AllRestaurants';
import Loader from '../components/Loader';

const Home = () => {
	return (
		<>
			{/* <Loader /> */}
			<Header />
			<main className='main'>
				<Explore />
				<List />
				<AllRestaurants />
			</main>
			<Footer />
		</>
	);
};

export default Home;
