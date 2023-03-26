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
	onPress: () => void;
	title: string;
};

function StartButton({ style, onPress, title }: Props) {
	return (
		<View style={style}>
			<TouchableHighlight
				style={styles.starButton}
				underlayColor={"grey"}
				onPress={onPress}
			>
				<Text style={styles.startText}>{title}</Text>
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
