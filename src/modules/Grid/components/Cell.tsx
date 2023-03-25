import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { useGrid } from "../hooks/useGrid";

type Props = {
	alive: boolean;
	onPress: () => void;
};

function Cell({ alive, onPress }: Props) {
	return (
		<Pressable
			style={{
				flex: 1,
				backgroundColor: alive ? "black" : "white",
				borderWidth: 1,
				borderColor: "black",
			}}
			onPress={onPress}
		/>
	);
}

export default Cell;
