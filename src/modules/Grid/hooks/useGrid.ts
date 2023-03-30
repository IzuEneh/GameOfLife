import React, { useState } from "react";
import { Dimensions } from "react-native";

function create2DArrayOfSizeN<T>(
	numRows: number,
	numCols: number,
	fill: T
): Array<T[]> {
	const arr = new Array(numRows);
	for (let i = 0; i < numRows; i++) {
		arr[i] = new Array(numCols).fill(fill);
	}
	return arr;
}

const useGrid = (size: number) => {
	const width = Math.round(Dimensions.get("window").width / size);
	const numRows = Math.floor(Dimensions.get("window").height / width);
	const [grid, setGrid] = useState(create2DArrayOfSizeN(numRows, size, false));

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
