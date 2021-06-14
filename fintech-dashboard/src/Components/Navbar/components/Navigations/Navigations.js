import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import RocketIcon from '../../../../Assets/Icons/Rocket';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Navigations = () => {
	const [activeNavigation, setactiveNavigation] = useState(0);
	const navigations = [
		{
			components: [
				<RocketIcon />,
				<h2 className='navbarNavigation__text'>Dashboard</h2>,
			],
		},
		{
			components: [
				<PermIdentityIcon />,
				<h2 className='navbarNavigation__text'>Clients</h2>,
			],
		},
		{
			components: [
				<RocketIcon />,
				<h2 className='navbarNavigation__text'>Dashboard</h2>,
			],
		},
	];
	return (
		<div className='navbarNavigations'>
			{navigations.map((v, i) => {
				return (
					<Navigation
						onClick={() => {
							setactiveNavigation(i);
						}}
						active={activeNavigation === i}>
						{v.components.map((v, i) => v)}
					</Navigation>
				);
			})}
		</div>
	);
};

export default Navigations;
