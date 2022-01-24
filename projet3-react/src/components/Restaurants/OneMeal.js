// import React from 'react';

// const OneMeal = (mealInfo) => {
// 	console.log(mealInfo)
// 	return (
// 		<div className='meal anim-1'>
// 			{mealInfo.restaurantMenu.map((meal) => (
// 				<>
// 					<div className='meal__choise'>
// 						<h4 className='meal__name'>{meal.name}</h4>
// 						<p className='meal__text'>{meal.description}</p>
// 					</div>
// 					<div className='meal__price'>{meal.price / 100 + '€'}</div>
// 					<div className='meal__confirm'>
// 						<div className='meal__anim'>
// 							<span className='meal__check'>
// 								<i className='fas fa-check'></i>
// 							</span>
// 						</div>
// 					</div>
// 				</>
// 			))}
// 		</div>
// 	);
// };

// export default OneMeal;

import React, { Component } from 'react';

class OneMeal extends Component {
	render() {
		let { name, description, price } = this.props.restaurantMenu;
		console.log(this.props.restaurantMenu);
		return (
			<div className='meal anim-1'>
				{this.props.restaurantMenu.map((test) => (
					<>
						<div className='meal__choise'>
							<h4 className='meal__name'>{test.name}</h4>
							<p className='meal__text'>{test.description}</p>
						</div>
						<div className='meal__price'>{test.price / 100 + '€'}</div>
						<div className='meal__confirm'>
							<div className='meal__anim'>
								<span className='meal__check'>
									<i className='fas fa-check'></i>
								</span>
							</div>
						</div>
					</>
				))}
			</div>
		);
	}
}

export default OneMeal;
