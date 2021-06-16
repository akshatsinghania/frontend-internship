import React from 'react';
import InvoicesAndRevenue from './Components/Rows/InvoicesAndRevenue';
import TotalProfitAndExpenses from './Components/Rows/TotalProfitAndExpenses';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<InvoicesAndRevenue />
			<TotalProfitAndExpenses />
		</div>
	);
};

export default Dashboard;
