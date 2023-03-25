import React from "react";
import { View, StyleSheet } from "react-native";
import { useGrid } from "../hooks/useGrid";

import Row from "./Row";

type Props = {
	cells: number;
	size: number;
};

function Grid({ cells, size }: Props) {
	const { grid, toggleCell } = useGrid(cells);
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
						toggleCell(index, cellIndex);
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
