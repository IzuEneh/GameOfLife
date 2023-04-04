import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import Constants from "expo-constants";

import Grid from "./src/modules/Grid/components/Grid";
import { useGrid } from "./src/modules/Grid/hooks/useGrid";
import updateGrid from "./src/modules/Grid/api/updateGrid";
import GameButtons from "./src/modules/Game/GameButtons";
import { ThemeProvider } from "./src/modules/common/ThemeContext";

export default function App() {
	const height = Dimensions.get("window").height - Constants.statusBarHeight;
	const width = Dimensions.get("window").width;
	const { grid, toggleCell, setGrid, resetGrid } = useGrid(height, width, 15);
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (playing) {
				setGrid(updateGrid);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [playing]);

	const handleCellPress = (row: number, col: number) => {
		if (playing) {
			return;
		}
		toggleCell(row, col);
	};

	const handleStart = () => {
		setGrid(updateGrid);
		setPlaying(true);
	};

	const handleReset = () => {
		if (playing) {
			setPlaying(false);
		}

		resetGrid();
	};

	const handlePause = () => {
		setPlaying(false);
	};

	return (
		<ThemeProvider>
			<View style={styles.container}>
				<StatusBar style="auto" />
				<Grid
					height={Dimensions.get("window").height - Constants.statusBarHeight}
					width={Dimensions.get("window").width}
					grid={grid}
					onCellPress={handleCellPress}
				/>
				<GameButtons
					style={styles.buttons}
					isPlaying={playing}
					onStart={handleStart}
					onReset={handleReset}
					onPause={handlePause}
				/>
			</View>
		</ThemeProvider>
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
	buttons: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: Dimensions.get("window").width,
		marginBottom: 64,
		opacity: 0.85,
	},
});
