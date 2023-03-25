import { StatusBar } from 'expo-status-bar';
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import StartButton from "./src/modules/common/StartButton";
import Cell from "./src/modules/Grid/components/Cell";
import Grid from "./src/modules/Grid/components/Grid";

export default function App() {
	const row = new Array(10).fill(false);
	const grid = new Array(10).fill(row);
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.grid}>
				<Grid cells={15} size={Dimensions.get("window").width} />
			</View>
			<StartButton style={styles.startButton} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	grid: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
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
