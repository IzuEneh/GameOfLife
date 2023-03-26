import React from "react";
import { View, StyleSheet } from "react-native";
import { useGrid } from "../hooks/useGrid";

import Row from "./Row";

type Props = {
	size: number;
	grid: boolean[][];
	onCellPress: (rowIndex: number, cellIndex: number) => void;
};

function Grid({ size, grid, onCellPress }: Props) {
	return (
		<View
			style={[
				styles.container,
				{
					height: size,
					width: size,
				},
			]}
		>
			{grid.map((row, index) => (
				<Row
					key={index}
					cells={row}
					onCellPress={(cellIndex) => {
						onCellPress(index, cellIndex);
					}}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Grid;
