import React from 'react';

import Cell from './Cell';

export default function Grid(props) {
	const { grid, gridSize, updateGridOnClick } = props;

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
							gridSize={gridSize}
							updateGridOnClick={updateGridOnClick}
						/>
					))}
				</div>
			))}
		</div>
	);
}
