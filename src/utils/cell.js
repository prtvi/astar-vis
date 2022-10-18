class Cell {
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

export const getGrid = function (gridSize) {
	const grid = [];
	for (let i = 0; i < gridSize; i++) {
		const row = [];

		for (let j = 0; j < gridSize; j++) row.push(new Cell(j, i, 0, gridSize));

		grid.push(row);
	}

	return grid;
};

export const getGridStates = function (grid) {
	return grid.map(row => row.map(cell => cell.state));
};

export const cellToCoords = function (cell) {
	return `${cell.x},${cell.y}`;
};

export const coordsToCell = function (grid, coordsString) {
	const [x, y] = coordsString.split(',');
	return grid[+y][+x];
};

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
