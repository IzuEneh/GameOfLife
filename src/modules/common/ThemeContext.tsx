import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useState,
} from "react";
// import

type State = {
	isDark: boolean;
};
const initialState = {
	isDark: false,
};

const ThemeContext = createContext<State>(initialState);
const ThemeDispatchContext = createContext<() => void>(() => null);

function ThemeProvider({ children }: PropsWithChildren<{}>) {
	const [theme, setTheme] = useState(initialState);
	const toggleTheme = () => setTheme({ isDark: !theme.isDark });

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeDispatchContext.Provider value={toggleTheme}>
				{children}
			</ThemeDispatchContext.Provider>
		</ThemeContext.Provider>
	);
}

function useThemeContext() {
	return useContext(ThemeContext);
}

function useThemeToggle() {
	return useContext(ThemeDispatchContext);
}

export { ThemeProvider, useThemeContext, useThemeToggle };
