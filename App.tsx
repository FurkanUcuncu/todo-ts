import 'react-native-gesture-handler';
import React from 'react'
import {MainStackNavigator} from "./src/routes/StackNavigator";
import {Provider} from "react-redux";
import {Provider as PaperProvider} from 'react-native-paper';
import CustomSettings from './src/helpers/CustomSettings'
import store from "./src/store";
import useCachedResources from "./src/hooks/useChackedResources";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <PaperProvider theme={CustomSettings.theme}>
          <NavigationContainer>
              <MainStackNavigator/>
          </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

export default App
