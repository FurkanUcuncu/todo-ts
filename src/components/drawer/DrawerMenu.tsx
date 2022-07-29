import React from 'react'
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerNavigationProp,
    DrawerScreenProps,
} from '@react-navigation/drawer'
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import {Text} from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import {useTheme} from "react-native-paper";

const DrawerMenu:React.FC<DrawerContentComponentProps> = (props) => {
    const { colors } = useTheme()
    return (
        <>
            <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/bg.jpeg')}>
                <Image style={styles.profileImage} source={require('../../../assets/images/profile.jpeg')} />
                <Text style={styles.nameText}>Furkan ÜÇÜNCÜ</Text>
            </ImageBackground>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.drawer}>

                <View style={styles.navigationBtnContainer}>
                    <DrawerItemList {...props} />
                {/*    <DrawerNavItem*/}
                {/*    text="Free Driving Mode"*/}
                {/*    icon={<MaterialCommunityIcons name="steering" size={24} color="white" />}*/}
                {/*    onPress={() => { }}*/}
                {/*/>*/}
                {/*<DrawerNavItem*/}
                {/*    text="Settings"*/}
                {/*    icon={<Feather name="settings" size={24} color="white" />}*/}
                {/*    onPress={() => { }}*/}
                {/*/>*/}

                </View>
            </DrawerContentScrollView>
            <View style={styles.drawerBottom}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <MaterialIcons name="logout" size={24} color={colors.primary} />
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default DrawerMenu

const styles = StyleSheet.create({
    drawer: {
        // backgroundColor: "#30dbd414",
        flex:1
    },
    nameText:{
        fontSize:20
    },
    viewProfileText:{
        fontSize:16
    },
    signOutText:{
        marginHorizontal:10,
        fontSize:20
    },
    drawerContainer: {
        padding: 20,
        flex: 1,
        height: '100%',
    },
    backgroundImage: {
        padding: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 16,
        marginBottom: 20,
    },
    drawerBottom: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    logoutBtn: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navigationBtnContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    }
})
