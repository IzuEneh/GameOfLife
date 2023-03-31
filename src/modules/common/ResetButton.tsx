import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
	onPress: () => void;
};

function ResetButton({ onPress }: Props) {
	return (
		<TouchableHighlight
			style={styles.container}
			underlayColor={"grey"}
			onPress={onPress}
		>
			<MaterialCommunityIcons name="restart" size={24} color="black" />
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 8,
		borderRadius: 100,
		backgroundColor: "white",
		borderColor: "black",
		borderWidth: 2,
	},
});

export default ResetButton;
