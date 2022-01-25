import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import New from './New';

class Restaurant extends Component {
	render() {
		let { id, name, info, picture, alt, isNew } = this.props.item;

		return (
			<article className='restaurant__card'>
				<NavLink
					to={{
						pathname: '/restaurant',
						search: `?id=${id}`,
					}}
				>
					<img src={picture} className='restaurant__img' alt={alt} />
					{isNew === true && <New />}
					<div className='restaurant__footer'>
						<div className='restaurant__info'>
							<h4 className='restaurant__name'>{name}</h4>
							<p className='restaurant__text'>{info}</p>
						</div>
						<div className='restaurant__anim'>
							<span className='restaurant__icon'>
								<i className='far fa-heart'></i>
							</span>
							<span className='restaurant__icon--animation'>
								<i className='fas fa-heart'></i>
							</span>
						</div>
					</div>
				</NavLink>
			</article>
		);
	}
}

export default Restaurant;
