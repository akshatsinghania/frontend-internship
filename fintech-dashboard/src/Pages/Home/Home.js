import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			<Navbar />
		</div>
	);
};

export default Home;
