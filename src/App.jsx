import React from 'react';

import Grid from './components/Grid';

export default function App() {
	const grid = [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	];

	return (
		<div className="App">
			<header>
				<h1>Header</h1>
			</header>

			<Grid grid={grid} />
		</div>
	);
}
