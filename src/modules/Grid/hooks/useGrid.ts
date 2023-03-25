import React, { useState } from "react";

function create2DArrayOfSizeN<T>(n: number, fill: T): Array<T[]> {
	const arr = new Array(n);
	for (let i = 0; i < n; i++) {
		arr[i] = new Array(n).fill(false);
	}
	return arr;
}

const useGrid = (size: number) => {
	const [grid, setGrid] = useState(create2DArrayOfSizeN(size, false));

	const toggleCell = (i: number, j: number) => {
		const newGrid = grid.map((row, index) => {
			if (index != i) {
				return row;
			}

			const newRow = row.map((cell, index) => {
				if (index != j) {
					return cell;
				}

				return !cell;
			});

			return newRow;
		});
		setGrid(newGrid);
	};

	return {
		grid,
		setGrid,
		toggleCell,
	};
};

export { useGrid };
