import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";
import { useState, useEffect } from "react";
import Constants from "expo-constants";

import StartButton from "../common/StartButton";
import ResetButton from "../common/ResetButton";
import PauseButton from "../common/PauseButton";

type Props = {
	style?: ViewStyle;
	isPlaying: boolean;
	onStart: () => void;
	onPause: () => void;
	onReset: () => void;
};

function GameButtons({ style, isPlaying, onStart, onPause, onReset }: Props) {
	if (isPlaying) {
		return (
			<View style={[styles.pauseButton, style]}>
				<PauseButton onPress={onPause} />
			</View>
		);
	}

	return (
		<View style={[styles.playingButtons, style]}>
			<StartButton onPress={onStart} title={"Start"} />
			<ResetButton onPress={onReset} />
		</View>
	);
}

const styles = StyleSheet.create({
	playingButtons: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
	},
	pauseButton: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default GameButtons;
