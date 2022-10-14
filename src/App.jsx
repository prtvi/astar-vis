import React from 'react';

import Grid from './components/Grid';
import InputForm from './components/InputForm';

class Node {
	constructor(x, y, state, totalRows) {
		this.x = x;
		this.y = y;
		this.state = state;
		this.neighbours = [];
		this.totalRows = totalRows;
	}

	isBarrier() {
		return this.state === 1;
	}

	makeBarrier() {
		this.state = 1;
	}

	isReset() {
		return this.state === 0;
	}

	reset() {
		this.state = 0;
	}

	makeClosed() {
		this.state = 2;
	}

	makeOpen() {
		this.state = 3;
	}

	makeStart() {
		this.state = 5;
	}

	makeEnd() {
		this.state = 9;
	}

	makePath() {
		this.state = 4;
	}

	// pending
	updateNeighbours(grid) {
		this.neighbours = [];

		// BOTTOM neighbour
		if (this.y < this.totalRows - 1 && !grid[this.y + 1][this.x].isBarrier())
			this.neighbours.push(grid[this.y + 1][this.x]);

		// TOP neighbour
		if (this.y > 0 && !grid[this.y - 1][this.x].isBarrier())
			this.neighbours.push(grid[this.y - 1][this.x]);

		// RIGHT neighbour
		if (this.x < this.totalRows - 1 && !grid[this.y][this.x + 1].isBarrier())
			this.neighbours.push(grid[this.y][this.x + 1]);

		// LEFT neighbour
		if (this.x > 0 && !grid[this.y][this.x - 1].isBarrier())
			this.neighbours.push(grid[this.y][this.x - 1]);
	}
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getNodesGrid = function (gridSize) {
	const gridNodes = [];
	for (let i = 0; i < gridSize; i++) {
		const row = [];

		for (let j = 0; j < gridSize; j++) row.push(new Node(j, i, 0, gridSize));

		gridNodes.push(row);
	}

	return gridNodes;
};

const getNodeStates = function (nodesGrid) {
	return nodesGrid.map(row => row.map(node => node.state));
};

export default function App() {
	const [speed, setSpeed] = React.useState(50);

	const [gridSize, setGridSize] = React.useState(7);
	const [gridNodes, updateGridNodes] = React.useState(getNodesGrid(gridSize));

	const [startNode, setStartNode] = React.useState(null);
	const [endNode, setEndNode] = React.useState(null);

	const [nodesClicked, updateNodesClicked] = React.useState(0);

	const updateGridOnInput = function (newGridSize) {
		setStartNode(null);
		setEndNode(null);
		updateNodesClicked(0);
		updateGridNodes(curr => getNodesGrid(newGridSize));
	};

	const updateGridOnClick = function (x, y) {
		const node = gridNodes[y][x];

		if (nodesClicked >= 2) {
			// add/remove barrier

			updateNodesClicked(nodesClicked + 1);
			updateGridNodes(grid => {
				if (node.isBarrier()) node.reset();
				else if (node.isReset()) node.makeBarrier();

				return grid;
			});
		} else if (nodesClicked === 1) {
			// add end node

			updateGridNodes(grid => {
				if (node.isReset()) {
					node.makeEnd();
					updateNodesClicked(nodesClicked + 1);

					setEndNode(node);
				}

				return grid;
			});
		} else if (nodesClicked === 0) {
			// add start node

			updateGridNodes(grid => {
				if (node.isReset()) {
					node.makeStart();
					updateNodesClicked(nodesClicked + 1);

					setStartNode(node);
				}

				return grid;
			});
		}
	};

	const startVis = async function () {
		console.log('start vis');
		await delay(speed);

		console.log(startNode, endNode);
		console.log(gridNodes);
	};

	return (
		<div className="main">
			<header>
				<h1>A</h1>
			</header>
			<InputForm
				updateGridOnInput={updateGridOnInput}
				setGridSize={setGridSize}
				setSpeed={setSpeed}
				startVis={startVis}
			/>
			<Grid
				grid={getNodeStates(gridNodes)}
				updateGridOnClick={updateGridOnClick}
			/>
		</div>
	);
}
