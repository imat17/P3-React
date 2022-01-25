import React from 'react';
import Arrow from './Arrow';

const Header = (props) => {
	const { arrowDisplay } = props;
	return (
		<header className='header'>
			{arrowDisplay && <Arrow />}
			<h1 className='header__logo'>ohmyfood</h1>
		</header>
	);
};

export default Header;
