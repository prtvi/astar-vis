import React from 'react';

import Grid from './components/Grid';
import InputForm from './components/InputForm';
import Legend from './components/Legend';

import { PriorityQueue } from './utils/pQueue';
import {
	getGrid,
	getGridStates,
	cellToCoords,
	coordsToCell,
	delay,
} from './utils/cell';

export default function App() {
	const [speed, setSpeed] = React.useState(50);
	const [ifRunning, changeIfRunning] = React.useState(false);

	const [gridSize, setGridSize] = React.useState(10);
	const [grid, updateGrid] = React.useState(getGrid(gridSize));

	const [start, setStart] = React.useState(null);
	const [end, setEnd] = React.useState(null);

	const [cellsClicked, updateCellsClicked] = React.useState(0);

	const updateGridOnInput = function (newGridSize) {
		setStart(null);
		setEnd(null);
		updateCellsClicked(0);
		updateGrid(curr => getGrid(newGridSize));
	};

	const updateGridOnClick = function (x, y) {
		const cell = grid[y][x];

		if (cellsClicked === 0 && !start && !end) {
			// add start cell
			updateGrid(grid => {
				if (cell.isReset()) {
					cell.makeStart();
					setStart(cell);
					updateCellsClicked(cellsClicked + 1);
				}

				return grid;
			});
		} else if (cellsClicked === 1 && !end && start) {
			// add end cell
			updateGrid(grid => {
				if (cell.isReset()) {
					cell.makeEnd();
					setEnd(cell);
					updateCellsClicked(cellsClicked + 1);
				}

				return grid;
			});
		} else if (cellsClicked >= 2 && start && end) {
			// add/remove barrier
			updateGrid(grid => {
				if (cell.isReset()) {
					cell.makeBarrier();
					updateCellsClicked(cellsClicked + 1);
				} else if (cell.isBarrier()) {
					cell.reset();
					updateCellsClicked(cellsClicked - 1);
				}

				return grid;
			});
		}
	};

	const h = function (c1, c2) {
		const [x1, y1] = [c1.x, c1.y];
		const [x2, y2] = [c2.x, c2.y];

		return Math.abs(x1 - x2) + Math.abs(y1 - y2);
	};

	const reconstructPath = async function (cameFrom, currentCoords, grid) {
		while (currentCoords in cameFrom) {
			await delay(speed);

			currentCoords = cameFrom[currentCoords];
			coordsToCell(grid, currentCoords).makePath();

			updateGrid(grid => grid.slice());
		}
	};

	const algorithm = async function (grid, start, end) {
		const startCoords = cellToCoords(start);
		const endCoords = cellToCoords(end);

		let count = 0;
		const openSet = new PriorityQueue();
		openSet.enqueue([count, startCoords], 0);
		const cameFrom = {};

		const gScore = {};
		grid.forEach(row =>
			row.forEach(cell => (gScore[cellToCoords(cell)] = Infinity))
		);
		gScore[startCoords] = 0;

		const fScore = {};
		grid.forEach(row =>
			row.forEach(cell => (fScore[cellToCoords(cell)] = Infinity))
		);
		fScore[startCoords] = h(start, end);

		const openSetHash = new Set([startCoords]);

		while (!openSet.isEmpty()) {
			const currentCellCoords = openSet.dequeue().element[1];
			const currentCell = coordsToCell(grid, currentCellCoords);

			openSetHash.delete(currentCellCoords);

			if (currentCellCoords === endCoords) {
				await reconstructPath(cameFrom, endCoords, grid);

				end.makeEnd();
				start.makeStart();
				return true;
			}

			// eslint-disable-next-line
			currentCell.neighbours.forEach(neighbour => {
				const neighbourCoords = cellToCoords(neighbour);
				const tempGScore = gScore[currentCellCoords] + 1;

				if (tempGScore < gScore[neighbourCoords]) {
					cameFrom[neighbourCoords] = currentCellCoords;
					gScore[neighbourCoords] = tempGScore;
					fScore[neighbourCoords] = tempGScore + h(neighbour, end);

					if (!openSetHash.has(neighbourCoords)) {
						count += 1;

						openSet.enqueue([count, neighbourCoords], fScore[neighbourCoords]);
						openSetHash.add(neighbourCoords);

						neighbour.makeClosed();
					}
				}
			});

			await delay(speed);

			updateGrid(grid => grid.slice());

			if (currentCell !== start) {
				currentCell.makeOpen();
			}
		}

		return false;
	};

	const startVis = async function () {
		if (start && end) {
			changeIfRunning(true);

			// update neighbours
			grid.forEach(row => row.forEach(cell => cell.updateNeighbours(grid)));

			await algorithm(grid, start, end);
		}
	};

	return (
		<div className="main">
			<header>
				<h1>A* shortest path algorithm visualization</h1>
			</header>

			<InputForm
				updateGridOnInput={updateGridOnInput}
				setGridSize={setGridSize}
				setSpeed={setSpeed}
				startVis={startVis}
				ifRunning={ifRunning}
			/>

			<Grid
				grid={getGridStates(grid)}
				updateGridOnClick={updateGridOnClick}
				gridSize={gridSize}
				cellsClicked={cellsClicked}
			/>

			<Legend />
		</div>
	);
}
