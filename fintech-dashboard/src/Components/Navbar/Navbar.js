import React from 'react';
import WelcomeBack from './components/WelcomeBack/WelcomeBack';
import ProfilePicture from '../../Assets/Images/ProfilePicture.png';
import Navigations from './components/Navigations/Navigations';

const Navbar = () => {
	return (
		<div className='navbar'>
			<WelcomeBack name={'Julie Bell'} profilePicture={ProfilePicture} />
			<Navigations />
		</div>
	);
};

export default Navbar;
