import React from 'react';

import Cell from './Cell';

const getRowAndCellHeight = function (gridSize) {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	let cellSize = 0;
	const m = 2;

	if (windowWidth > windowHeight) cellSize = windowHeight / (gridSize * m);
	else if (windowWidth <= windowHeight) cellSize = windowWidth / (gridSize * m);

	// row height will be cell height + 3 (1px margin + 2 px border)
	const rowHeight = `${cellSize + 3}px`;

	return [rowHeight, cellSize];
};

export default function Grid(props) {
	const { grid, gridSize, updateGridOnClick, cellsClicked } = props;
	const [rowHeight, cellSize] = getRowAndCellHeight(gridSize);

	return (
		<div className="grid">
			{grid.map((row, nRow) => (
				<div className="row" style={{ height: rowHeight }} key={nRow}>
					{row.map((cell, nCell) => (
						<Cell
							key={`${nRow},${nCell}`}
							x={nCell}
							y={nRow}
							state={cell}
							cellSize={cellSize}
							cellsClicked={cellsClicked}
							updateGridOnClick={updateGridOnClick}
						/>
					))}
				</div>
			))}
		</div>
	);
}
