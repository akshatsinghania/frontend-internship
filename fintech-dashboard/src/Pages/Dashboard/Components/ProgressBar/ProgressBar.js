import React from 'react';

const ProgressBar = ({ progress }) => {
	console.log(progress);
	return (
		<div className='progressBar'>
			<div style={{ width: `${progress}%` }}></div>
		</div>
	);
};

export default ProgressBar;
