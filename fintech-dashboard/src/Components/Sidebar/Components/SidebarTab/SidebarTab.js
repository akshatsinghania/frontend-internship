import React from 'react';
import './SidebarTab.css';

const Tab = ({
	children,
	color = 'lightgreen',
	active = false,
	onClick,
	disabled,
}) => {
	return (
		<div
			className={`sidebarTab ${active ? 'sidebarTab-active' : null}`}
			style={{ '--sidebarTab-color': color }}>
			<button
				className={`sidebarTab__button`}
				onClick={onClick}
				disabled={disabled}>
				{children}
			</button>
		</div>
	);
};

export default Tab;
