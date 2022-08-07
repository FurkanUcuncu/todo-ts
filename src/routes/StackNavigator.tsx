import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer";
import DrawerMenu from "../components/drawer/DrawerMenu"
import Home from "../screens/Home";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from "react-native-paper";
import Settings from "../screens/Settings";
import {useText} from "../context/SettingsContext";

type RootStackParamList = {
    Home: undefined ;
};

export type HomeScreen = DrawerNavigationProp<RootStackParamList, 'Home'>;

const Drawer = createDrawerNavigator();

export const MainStackNavigator = () => {
    const {colors} = useTheme()
    return (
            <Drawer.Navigator
                drawerContent={(props) => <DrawerMenu {...props} />}
                screenOptions={{
                    headerShown:false,
                    drawerPosition: "right",
                    drawerActiveTintColor:colors.primary
                }}
            >
            <Drawer.Screen
                options={{
                    drawerLabel:useText('home'),
                    drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="home-modern" size={size} color={color} />),

                }}
                // name={useText('home')}
                name="Home"
                component={Home}
            />
            <Drawer.Screen
                options={{
                    drawerLabel:useText('settings'),
                    drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="cog-outline" size={size} color={color} />),

                }}
                // name={useText('settings')}
                name="Settings"
                component={Settings}
            />
        </Drawer.Navigator>
    );
}
