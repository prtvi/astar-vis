import React from 'react';

import Cell from './Cell';

export default function Grid(props) {
	const { grid } = props;

	return (
		<div className="grid">
			{grid.map((row, nRow) => (
				<div className="row" key={nRow}>
					{row.map((cell, nCell) => (
						<Cell key={`${nRow},${nCell}`} pos={`${nRow},${nCell}`} />
					))}
				</div>
			))}
		</div>
	);
}
