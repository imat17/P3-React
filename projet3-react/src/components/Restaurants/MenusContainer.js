import React, { Component } from 'react';
import { menuList } from '../../data/menuList';
import OneMeal from './OneMeal';

class MenusContainer extends Component {
	state = {
		mealInfo: menuList,
		typesOfMeal: [
			{ id: 1, value: 'ENTRÉES' },
			{ id: 2, value: 'PLATS' },
			{ id: 3, value: 'DESSERTS' },
		],
	};
	render() {
		let { mealInfo, typesOfMeal } = this.state;
		console.log(mealInfo);
		return (
			<>
				<div className='menu__title'>
					<h3 className='menu__name rob'>{this.props.restaurantName}</h3>
					<span className='menu__icon'>
						<i className='far fa-heart'></i>
					</span>
					<span className='menu__icon--animation'>
						<i className='fas fa-heart'></i>
					</span>
				</div>
				<div className='container'>
					{typesOfMeal.map((typeOfMeal) => {
						return (
							<div className='container__meal' key={typeOfMeal.id}>
								<h4 className='container__title'>{typeOfMeal.value}</h4>
								{this.props.restaurantMenu
									.filter((meal) => {
									return	meal.type === typeOfMeal.value;
									})
									.map((meal) => {
										return <OneMeal key={meal.id} meal={meal} />;
									})}
							</div>
						);
					})}
				</div>
			</>
		);
	}
}

export default MenusContainer;
