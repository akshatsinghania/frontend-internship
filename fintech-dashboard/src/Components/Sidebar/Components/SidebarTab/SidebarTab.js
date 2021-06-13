import React from 'react';
import './SidebarTab.css';

const Tab = ({ color = 'lightgreen', children, ...params }) => {
	return (
		<button {...params} className={`sidebarTab sidebarTab-${color} `}>
			{children}
		</button>
	);
};

export default Tab;
