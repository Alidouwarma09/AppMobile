import React, { createContext, useState, useEffect, useContext } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme !== null) {
        setIsDarkMode(storedTheme === 'dark');
      } else {
        setIsDarkMode(colorScheme === 'dark');
      }
    };
    fetchTheme();
  }, [colorScheme]);

  const toggleDarkMode = async () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    await AsyncStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
