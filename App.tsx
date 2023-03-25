import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Cell from "./src/modules/Grid/components/Cell";
import Grid from "./src/modules/Grid/components/Grid";

export default function App() {
	const row = new Array(10).fill(false);
	const grid = new Array(10).fill(row);
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Grid cells={15} size={Dimensions.get("window").width} />
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
	grid: {},
});
