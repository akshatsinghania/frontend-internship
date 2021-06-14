import React, { useState } from 'react';
import SidebarTab from './Components/SidebarTab/SidebarTab';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState(false);
	const tabs = [
		{
			component: <ArrowDropUpIcon className='sidebar__iconarrowUp' />,
			color: 'lightblue',
		},
		{
			component: <CheckBoxOutlineBlankIcon className='sidebar__iconBox' />,
			color: 'lightgreen',
		},
		{
			component: <AddIcon />,
			color: 'white',
			disabled: true,
		},
	];
	return (
		<div className='sidebar'>
			{tabs.map((v, i) => {
				return (
					<SidebarTab
						color={v.color}
						className='sidebar__tab'
						disabled={v.disabled ? true : false}
						active={i === activeTab ? true : false}
						onClick={() => {
							console.log('done');
							setActiveTab(i);
						}}>
						{v.component}
					</SidebarTab>
				);
			})}
		</div>
	);
};

export default Sidebar;
