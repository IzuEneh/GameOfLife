import React from "react";
import { View, StyleSheet } from "react-native";
import Cell from "./Cell";

type Props = {
	cells: boolean[];
	onCellPress: (cellIndex: number) => void;
};

function Row({ cells, onCellPress }: Props) {
	return (
		<View style={styles.container}>
			{cells.map((isAlive, index) => (
				<Cell
					key={index}
					alive={isAlive}
					onPress={() => {
						onCellPress(index);
					}}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 1,
	},
});

export default Row;
