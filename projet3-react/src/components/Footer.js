import React from 'react';
import Logo from '../media/ohmyfood@2x.svg';
;
const Footer = () => {
	return (
		<footer className='footer'>
			<img src={Logo} alt='logo ohmyfood' className='footer__logo' />
			<ol className='footer__contact'>
				<li className='footer__list'>
					<span className='footer__icon'>
						<i className='fas fa-utensils'></i>
					</span>
					Proposer un restaurant
				</li>
				<li className='footer__list'>
					<span className='footer__icon'>
						<i className='fas fa-hands-helping'></i>
					</span>
					Devenir partenaire
				</li>
				<li className='footer__list'>Mentions légales</li>
				<li className='footer__list'>
					<a className='footer__list--link' href='mailto:contact@ohmyfood.com'>
						Contact
					</a>
				</li>
			</ol>
		</footer>
	);
};

export default Footer;
