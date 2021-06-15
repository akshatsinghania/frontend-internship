import React from 'react';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import LineChart from './Components/LineChart/LineChart';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='dashboard__row'>
				<div className='dashboard__column'>
					<h2 className='dashboard__columnTitle-light'>Invoices</h2>
					<div className='dashboard__columnContent'>
						<div>
							<h1 className='dashboard__columnContent__text-heavy'>$12,095</h1>
							<p className='dashboard__columnContent__text-light dasboard__text-marginTop'>
								Over due
							</p>
						</div>
						<div>
							<h1 className='dashboard__columnContent__text-heavy'>$33,363</h1>
							<p className='dashboard__columnContent__text-light dasboard__text-marginTop'>
								Total Outstanding
							</p>
						</div>
						<div>
							<h1 className='dashboard__columnContent__text-heavy'>$4500</h1>
							<p className='dashboard__columnContent__text-light dasboard__text-marginTop'>
								In Draft
							</p>
						</div>
					</div>
				</div>
				<div className='dashboard__column'>
					<h2 className='dashboard__columnTitle-light'>Outstanding Revenue</h2>
					<div className='dashboard__columnContent'>
						<div>
							<ProgressBar progress={30} />
						</div>

						<div>
							<h1 className='dashboard__columnContent__text-heavy'>$21.3k</h1>
							<p className='dashboard__columnContent__text-light dasboard__text-marginTop'>
								$12,095 Overdue
							</p>
						</div>
					</div>
				</div>
				<div className='dashboard__column'>
					<SearchIcon className='dashboard__icon' />
				</div>
			</div>
			<div className='dashboard__row'>
				<div className='dashboard__column'>
					<div className='dashboard__columnContent'>
						<h1 className='dashboard__columnTitle-heavy'>Total Profit</h1>
						<p className='dashboard__columnContent__text-light dasboard__text-marginLeft'>
							September 2020
						</p>
						<TuneIcon className='dashboard__icon' />
					</div>
					<div className='dashboard_columnContent'>
						<LineChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
