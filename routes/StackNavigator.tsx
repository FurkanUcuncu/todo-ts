import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import {NavigatorScreenParams} from "@react-navigation/native";
import Settings from "../screens/Settings";
import { createDrawerNavigator } from "@react-navigation/drawer";

type RootStackParamList = {
    // Home: NavigatorScreenParams<StackParamList> ;
    Home: undefined ;
    DrawerStack: undefined ;
};

const MainStack = createNativeStackNavigator<RootStackParamList>()

export type HomeScreen = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const MainStackNavigator = () => {
    return(
        <MainStack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown:false}}
        >
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen options={{ headerShown: false }} name="DrawerStack" component={DrawerStack} />
        </MainStack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
      <Drawer.Navigator initialRouteName="Settings">
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
  );
}
