import React, { Component } from 'react';

class Image extends Component {
	render() {
		console.log(this.props)
		return (
			<div className='image'>
				<img
					src={this.props.restaurantImg}
					alt=''
					className='image__background'
				/>
			</div>
		);
	}
}

export default Image;
