import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import {NavigationContainer, NavigatorScreenParams} from "@react-navigation/native";
import Settings from "../screens/Settings";
import { createDrawerNavigator } from "@react-navigation/drawer";

type RootStackParamList = {
    // Home: NavigatorScreenParams<StackParamList> ;
    Home: undefined ;
    Settings: undefined ;
};

const MainStack = createNativeStackNavigator<RootStackParamList>()

export type HomeScreen = NativeStackScreenProps<RootStackParamList, 'Home'>;

// export const MainStackNavigator = () => {
//     return(
//         <MainStack.Navigator
//             initialRouteName="Home"
//             screenOptions={{headerShown:false}}
//         >
//             <MainStack.Screen name="Home" component={Home} />
//             <MainStack.Screen options={{ headerShown: false }} name="Settings" component={DrawerStackNavigator} />
//         </MainStack.Navigator>
//     )
// }

const Drawer = createDrawerNavigator();

export const MainStackNavigator = () => {
  return (
          <Drawer.Navigator screenOptions={{headerShown:false,drawerPosition:"right" }}>
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Settings" component={Settings} />
          </Drawer.Navigator>
  );
}
