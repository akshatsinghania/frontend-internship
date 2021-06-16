import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import LineChart from '../../Components/LineChart/LineChart';
import CallMadeIcon from '@material-ui/icons/CallMade';
import LinkIcon from '@material-ui/icons/Link';
import AppleIcon from '@material-ui/icons/Apple';
import CloudIcon from '@material-ui/icons/Cloud';
import GroupIcon from '@material-ui/icons/Group';

const TotalProfitAndExpenses = () => {
	return (
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
			<div className='dashboard__column'>
				<div className='dashboard__columnContent dashboard__columnContent-column'>
					<div>
						<h1 className='dashboard__columnTitle-heavy'>
							Expenses
							<CallMadeIcon className='dashboard__icon-small dashboard__icon-right' />
						</h1>
					</div>
					<div className='dashboard__columnContent-row'>
						<div className='dashboard__card'>
							<h3 className='dashboard__columnContent__text-heavy'>
								$20.00
								<LinkIcon className='dashboard__columnContentIcon-small' />
							</h3>
							<p className='dashboard__columnContent__text-light'>
								23 Sep,2020
							</p>
							<CloudIcon className='dashboard__icon-large' />
							<h3 className='dashboard__columnContent__text-heavy'>Software</h3>
						</div>
						<div className='dashboard__card dashboard__card-green'>
							<h3 className='dashboard__columnContent__text-heavy'>
								$30.00
								<LinkIcon className='dashboard__columnContentIcon-small' />
							</h3>
							<p className='dashboard__columnContent__text-light'>
								23 Sep,2020
							</p>
							<GroupIcon className='dashboard__icon-large' />
							<h3 className='dashboard__columnContent__text-heavy'>Support</h3>
						</div>
						<div className='dashboard__card dashboard__card-blue'>
							<h3 className='dashboard__columnContent__text-heavy'>
								$60.00
								<LinkIcon className='dashboard__columnContentIcon-small' />
							</h3>
							<p className='dashboard__columnContent__text-light'>
								23 Sep,2020
							</p>
							<AppleIcon className='dashboard__icon-large' />
							<h3 className='dashboard__columnContent__text-heavy'>Support</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalProfitAndExpenses;
