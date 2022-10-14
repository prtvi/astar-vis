import React from 'react';

import Cell from './Cell';

export default function Grid(props) {
	const { grid, updateGridOnClick } = props;

	return (
		<div className="grid">
			{grid.map((row, nRow) => (
				<div className="row" key={nRow}>
					{row.map((cell, nCell) => (
						<Cell
							key={`${nRow},${nCell}`}
							x={nCell}
							y={nRow}
							state={cell}
							updateGridOnClick={updateGridOnClick}
						/>
					))}
				</div>
			))}
		</div>
	);
}
