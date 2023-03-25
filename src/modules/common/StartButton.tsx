import React from "react";
import {
	TouchableHighlight,
	View,
	ViewStyle,
	Text,
	StyleSheet,
	Dimensions,
} from "react-native";

type Props = {
	style?: ViewStyle;
};
function StartButton({ style }: Props) {
	return (
		<View style={style}>
			<TouchableHighlight
				style={styles.starButton}
				underlayColor={"grey"}
				onPress={() => console.log("pressed")}
			>
				<Text style={styles.startText}>Start</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	starButton: {
		backgroundColor: "black",
		borderRadius: 20,
		width: 200,
		alignItems: "center",
		paddingVertical: 8,
	},
	startText: {
		color: "white",
		fontSize: 24,
	},
});

export default StartButton;
