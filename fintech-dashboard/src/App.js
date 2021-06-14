import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
	return (
		<div className='app'>
			<Sidebar />
			<Navbar />
		</div>
	);
};

export default App;
