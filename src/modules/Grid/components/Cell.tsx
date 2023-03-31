import React from "react";
import { Pressable } from "react-native";
import { useTheme } from "../../common/hooks/useTheme";

type Props = {
	alive: boolean;
	onPress: () => void;
};

function Cell({ alive, onPress }: Props) {
	const theme = useTheme();
	return (
		<Pressable
			style={{
				flex: 1,
				backgroundColor: alive ? theme.primary : theme.secondary,
				borderWidth: 1,
				borderColor: theme.primary,
			}}
			onPress={onPress}
		/>
	);
}

export default Cell;
