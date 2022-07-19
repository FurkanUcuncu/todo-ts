import React from 'react'
import {MainStackNavigator} from "./routes/StackNavigator";
import {Provider} from "react-redux";
import {Provider as PaperProvider} from 'react-native-paper';
import CustomSettings from './helpers/CustomSettings'
import store from "./store";
import useCachedResources from "./hooks/useChackedResources";
import {NavigationContainer} from "@react-navigation/native";
import Layout from './components/layout/Layout';

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <PaperProvider theme={CustomSettings.theme}>
        <Layout>
          <NavigationContainer>
              <MainStackNavigator/>
          </NavigationContainer>
        </Layout>
      </PaperProvider>
    </Provider>
  )
}

export default App
