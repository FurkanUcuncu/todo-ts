import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import {NavigatorScreenParams} from "@react-navigation/native";
import Settings from "../screens/Settings";

type RootStackParamList = {
    // Home: NavigatorScreenParams<StackParamList> ;
    Home: undefined ;
    Settings: undefined ;
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
            <MainStack.Screen name="Settings" component={Settings} />
        </MainStack.Navigator>
    )
}
