import { StatusBar } from 'expo-status-bar';
import {
	Dimensions,
	StyleSheet,
	View,
	SafeAreaView,
	Platform,
} from "react-native";
import { useState, useEffect } from "react";
import Constants from "expo-constants";

import StartButton from "./src/modules/common/StartButton";
import Grid from "./src/modules/Grid/components/Grid";
import { useGrid } from "./src/modules/Grid/hooks/useGrid";
import updateGrid from "./src/modules/Grid/api/updateGrid";

export default function App() {
	const height = Dimensions.get("window").height - Constants.statusBarHeight;
	const width = Dimensions.get("window").width;
	const { grid, toggleCell, setGrid } = useGrid(height, width, 15);
	const [playing, setPlaying] = useState(false);

	const update = () => {
		const newGrid = updateGrid(grid);
		setGrid(newGrid);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (playing) {
				setGrid(updateGrid);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [playing]);

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Grid
				height={Dimensions.get("window").height - Constants.statusBarHeight}
				width={Dimensions.get("window").width}
				grid={grid}
				onCellPress={(row, col) => {
					if (playing) {
						return;
					}
					toggleCell(row, col);
				}}
			/>
			<StartButton
				style={styles.startButton}
				onPress={() => {
					update();
					setPlaying((playing) => !playing);
				}}
				title={playing ? "Stop" : "Start"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
	},
	startButton: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: Dimensions.get("window").width,
		paddingBottom: 64,
		justifyContent: "center",
		alignItems: "center",
	},
});
