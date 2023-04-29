import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
	onPress: () => void;
};

function ARButton({ onPress }: Props) {
	return (
		<TouchableHighlight style={styles.container} underlayColor={"grey"} onPress={onPress}>
			<MaterialCommunityIcons name="augmented-reality" size={24} color="black" />
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: "5%",
		left: "74%",
		borderRadius: 100,
		width: 50,
		height: 50,
		marginTop: 50,
		opacity: 0.85,
		backgroundColor: "white",
		borderColor: "black",
		borderWidth: 2,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ARButton;
