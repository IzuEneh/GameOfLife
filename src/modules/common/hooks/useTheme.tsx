import { View, Pressable, useColorScheme } from "react-native";

const useTheme = () => {
	const theme = useColorScheme();
	const isDarkMode = theme === "dark";
	return {
		primary: isDarkMode ? "black" : "white",
		secondary: isDarkMode ? "white" : "black",
	};
};

export { useTheme };
