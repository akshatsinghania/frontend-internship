import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {
	return (
		<div className='app'>
			<Sidebar />
			<Navbar />
			<Dashboard />
		</div>
	);
};

export default App;
