import React from 'react';
import Home from './src/screens/Home';

// Tema
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './src/styles/defaultTheme';
import darkTheme from './src/styles/darkTheme';

const App = () => {
	// Tema do dispositivo
	const deviceTheme = useColorScheme();

	return (
		<ThemeProvider theme={deviceTheme == 'dark' ? darkTheme : defaultTheme}>
			<Home />
		</ThemeProvider>
	);
};

export default App;
