import React from 'react';
import './Sidebar.css';
import SidebarTab from './Components/SidebarTab/SidebarTab';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<SidebarTab color={'lightblue'} className='sidebar__tab'>
				<ArrowDropUpIcon className='sidebar__iconarrowUp' />
			</SidebarTab>
			<SidebarTab color={'lightgreen'} className='sidebar__tab'>
				<CheckBoxOutlineBlankIcon className='sidebar__iconBox' />
			</SidebarTab>
			<SidebarTab color={'white'} disabled>
				<AddIcon />
			</SidebarTab>
		</div>
	);
};

export default Sidebar;
