import React from 'react';

const Explore = () => {
	return (
		<>
			<div className='localisation'>
				<span className='localisation__icon'>
					<i className='fas fa-map-marker-alt'></i>
				</span>
				<span className='localisation__text'>Paris, Belleville</span>
			</div>

			<div className='information'>
				<h3 className='information__title'>Réservez le menu qui vous convient</h3>
				<p className='information__text'>
					Découvez des restaurants d'exception, sélectionnés par nos soins.
				</p>
				<button className='information__btn'>Explorer nos restaurants</button>
			</div>
		</>
	);
};

export default Explore;
