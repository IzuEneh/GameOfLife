import React from "react";
import { View, StyleSheet } from "react-native";

import Row from "./Row";

type Props = {
	width: number;
	height: number;
	grid: boolean[][];
	onCellPress: (rowIndex: number, cellIndex: number) => void;
};

function Grid({ width, height, grid, onCellPress }: Props) {
	return (
		<View style={[styles.container, { height, width }]}>
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
