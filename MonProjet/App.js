import React from 'react';
import { ThemeProvider } from './composants/ThemeContext/index';
import Routes from './routes/index';

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
