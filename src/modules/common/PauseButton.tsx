import React from "react";
import { TouchableHighlight, StyleSheet, View } from "react-native";
import { Foundation } from "@expo/vector-icons";

type Props = {
	onPress: () => void;
};

function PauseButton({ onPress }: Props) {
	return (
		<TouchableHighlight
			style={styles.container}
			onPress={onPress}
			underlayColor={"#fca5a5"}
		>
			<Foundation name="pause" size={50} color="white" />
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 100,
		backgroundColor: "#ef4444",
		width: 75,
		height: 75,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default PauseButton;
