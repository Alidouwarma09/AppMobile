import React from 'react';
import { ThemeProvider } from './composants/ThemeContext/index';
import  NotificationHandler  from './composants/NotificationHandler/index';
import Routes from './routes/index';

const App = () => {
  return (
    <ThemeProvider>
      <NotificationHandler />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
