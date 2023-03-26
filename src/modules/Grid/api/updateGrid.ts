const updateGrid = (grid: boolean[][]): boolean[][] => {
	const res = getBlankCopy(grid);
	// let alive = getAlive(grid);

	grid.forEach((row, i) => {
		row.forEach((cell, j) => {
			// debugger;
			const neighbours = getNeighbours([i, j], grid.length);
			const numAlive = neighbours.reduce((acc, curr) => {
				const [r, c] = curr;
				return grid[r][c] ? acc + 1 : acc;
			}, 0);

			if (!cell && numAlive === 3) {
				res[i][j] = true;
			} else if (cell && (numAlive < 2 || numAlive > 3)) {
				res[i][j] = false;
			} else {
				res[i][j] = cell;
			}
		});
	});
	//

	return res;
};

const getBlankCopy = (grid: boolean[][]): boolean[][] => {
	return grid.map((row) => row.map((cell) => false));
};

const getAlive = (grid: boolean[][]): number[][] => {
	const res: number[][] = [];
	grid.forEach((row, i) => {
		row.forEach((cell, j, arr) => {
			if (cell) {
				res.push([i, j]);
			}
		});
	});

	return res;
};

const getNeighbours = (
	cell: number[] | undefined,
	size: number
): number[][] => {
	if (!cell) {
		return [];
	}

	const dirs = [
		[-1, 0], // up
		[1, 0], // down
		[0, -1], // left
		[0, 1], // right
		[-1, -1], // up left
		[-1, 1], // up right
		[1, -1], // down left
		[1, 1], // down right
	];

	const res: number[][] = [];
	const [row, col] = cell;
	for (const [dr, dc] of dirs) {
		const r = row + dr;
		const c = col + dc;
		if (r >= 0 && c >= 0 && r < size && c < size) {
			res.push([r, c]);
		}
	}

	return res;
};

export default updateGrid;
