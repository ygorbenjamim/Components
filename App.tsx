import React from 'react';
import { useColorScheme } from 'react-native';
import Home from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './src/styles/defaultTheme';
import darkTheme from './src/styles/darkTheme';

const App = () => {
  const deviceTheme = useColorScheme();
  var myTheme = defaultTheme;
  if(deviceTheme == 'dark') myTheme = darkTheme;

  return (
    <ThemeProvider theme={ myTheme }>
      <Home />
    </ThemeProvider>
  );
};

export default App;
