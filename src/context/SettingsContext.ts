import React from 'react';

export const SettingsContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
  changeLanguage: (lang:string) => {},
  language:'en',
});