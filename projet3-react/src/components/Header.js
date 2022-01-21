import React from 'react';

const Header = () => {
	return (
		<header className='header'>
			<a className='header__icon' href='/'>
				<i className='fas fa-arrow-left'></i>
			</a>
			<h1 className='header__logo'>ohmyfood</h1>
		</header>
	);
};

export default Header;
