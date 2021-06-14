import React from 'react';

const WelcomeBack = ({ profilePicture, name }) => {
	return (
		<div className='welcomeBack'>
			<img src={profilePicture} />
			<h2 className='welcomeBack__text-light'>Welcome Back,</h2>
			<h1 className='welcomeBack__text-heavy'>{name}</h1>
		</div>
	);
};

export default WelcomeBack;
