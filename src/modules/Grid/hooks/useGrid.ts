import React, { useState } from "react";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

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

function calculateRows(height: number, width: number, numCols: number): number {
	const colWidth = Math.round(width / numCols);
	return Math.floor(height / colWidth);
}

const useGrid = (height: number, width: number, cols: number) => {
	const numRows = calculateRows(height, width, cols);
	const [grid, setGrid] = useState(create2DArrayOfSizeN(numRows, cols, false));

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
