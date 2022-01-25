import React, { Component } from 'react';

class OneMeal extends Component {
	render() {
		let { name, description, price } = this.props.meal;

		return (
			<div className='meal anim-1'>
				<>
					<div className='meal__choise'>
						<h4 className='meal__name'>{name}</h4>
						<p className='meal__text'>{description}</p>
					</div>
					<div className='meal__price'>{price / 100 + '€'}</div>
					<div className='meal__confirm'>
						<div className='meal__anim'>
							<span className='meal__check'>
								<i className='fas fa-check'></i>
							</span>
						</div>
					</div>
				</>
			</div>
		);
	}
}

export default OneMeal;
