import React, { createContext, useReducer, useEffect } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'dark' ? 'light' : 'dark';
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, 'light', (initial) => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : initial;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
