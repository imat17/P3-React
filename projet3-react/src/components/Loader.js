import React from 'react';

const Loader = () => {
	return (
		<div clasName='loader'>
			<div className='load'>
				<div className='load__circle load__circle--1'></div>
				<div className='load__circle load__circle--2'></div>
				<div className='load__circle load__circle--3'></div>
			</div>
		</div>
	);
};

export default Loader;
