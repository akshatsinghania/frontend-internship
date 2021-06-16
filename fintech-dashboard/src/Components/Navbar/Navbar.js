import React, { useState, useEffect } from 'react';
import WelcomeBack from './components/WelcomeBack/WelcomeBack';
import ProfilePicture from '../../Assets/Images/ProfilePicture.png';
import Navigations from './components/Navigations/Navigations';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(true);
	const handleMenuButton = () => setNavOpen(!navOpen);

	return (
		<div className='navbar'>
			<MenuIcon
				className={`navbarNavigations__menu`}
				onClick={handleMenuButton}
			/>
			<WelcomeBack name={'Julie Bell'} profilePicture={ProfilePicture} />
			{navOpen ? <Navigations /> : null}
		</div>
	);
};

export default Navbar;
