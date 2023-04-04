import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useThemeContext, useThemeToggle } from "../ThemeContext";

function DarkModeButton() {
	const { isDark } = useThemeContext();
	const toggleTheme = useThemeToggle();
	return (
		<TouchableHighlight
			style={styles.container}
			underlayColor={"grey"}
			onPress={toggleTheme}
		>
			{isDark ? (
				<FontAwesome name="sun-o" size={24} color="black" />
			) : (
				<Ionicons name="moon" size={24} color="black" />
			)}
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

export default DarkModeButton;
