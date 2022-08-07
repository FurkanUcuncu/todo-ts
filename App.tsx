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

const App = () => {
  const isLoadingComplete = useCachedResources();
  
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [language, setLanguage] = useState('en')

  let theme = isThemeDark ? CustomSettings.darkTheme : CustomSettings.theme
  
  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const changeLanguage = useCallback((lang:string) => {
    return setLanguage(lang)
  },[language])

  const preferences = useMemo(
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
      <SettingsContext.Provider value={preferences}>
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
