import React from 'react';
import './Navbar.css';
import WelcomeBack from './components/WelcomeBack/WelcomeBack';
import ProfilePicture from '../../Assets/Images/ProfilePicture.png';

const Navbar = () => {
	return (
		<div className='navbar'>
			<WelcomeBack name={'Julie Bell'} profilePicture={ProfilePicture} />
			<h1>SUp</h1>
		</div>
	);
};

export default Navbar;
