import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";

const MainStack = createNativeStackNavigator()

export const MainStackNavigator = () => {
    return(
        <MainStack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown:false}}
        >
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
    )
}
