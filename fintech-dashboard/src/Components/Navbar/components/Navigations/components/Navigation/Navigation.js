import React from 'react';
import './Navigation.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Navigation = ({ active, children, ...params }) => {
	return (
		<button className='navbarNavigation' {...params}>
			{active ? (
				<ArrowForwardIosIcon className='navbarNavigation-active' />
			) : null}
			{children}
		</button>
	);
};

export default Navigation;
