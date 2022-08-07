import React, {useContext} from 'react';
import {Language} from "../language/Language";

const initialContext = {
  toggleTheme: () => {},
  isThemeDark: false,
  changeLanguage: (lang:any) => {},
  language:Language['en'],
}

export const SettingsContext = React.createContext(initialContext);

export const useText = (t:string):string => {
  const { language } = useContext(SettingsContext);
  return language[t] || t;
};
