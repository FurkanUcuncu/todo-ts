import 'react-native-gesture-handler';
import React, {useMemo,useCallback, useState} from 'react'
import {MainStackNavigator} from "./src/routes/StackNavigator";
import {Provider} from "react-redux";
import {Provider as PaperProvider} from 'react-native-paper';
import CustomSettings from './src/helpers/CustomSettings'
import store from "./src/store";
import useCachedResources from "./src/hooks/useChackedResources";
import { NavigationContainer } from "@react-navigation/native";
import {SettingsContext} from './src/context/SettingsContext'
import { Language } from "./src/language/Language";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const App = () => {
  const isLoadingComplete = useCachedResources();

  const [isThemeDark, setIsThemeDark] = useState(false);
  const [language, setLanguage] = useState(Language['en'])

  let theme = isThemeDark ? CustomSettings.darkTheme : CustomSettings.theme

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const changeLanguage = useCallback((lang) => {
    return setLanguage(Language[lang])
  },[setLanguage])

  const value = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
      changeLanguage,
      language,
    }),
    [toggleTheme, isThemeDark, changeLanguage, language]
  );

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <SettingsContext.Provider value={value}>
          <PaperProvider theme={theme}>
              <NavigationContainer>
                  <MainStackNavigator/>
              </NavigationContainer>
          </PaperProvider>
      </SettingsContext.Provider>
    </Provider>
  )
}

export default App
