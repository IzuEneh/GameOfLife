import { View, Pressable, useColorScheme } from "react-native";
import { useThemeContext } from "../ThemeContext";

const useTheme = () => {
	const { isDark } = useThemeContext();
	return {
		primary: isDark ? "white" : "black",
		secondary: isDark ? "black" : "white",
	};
};

export { useTheme };
