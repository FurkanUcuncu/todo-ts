import React from 'react'
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import {Text} from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import {useTheme} from "react-native-paper";
import { useText } from '../../context/SettingsContext';

const DrawerMenu: React.FC<DrawerContentComponentProps> = (props) => {
    console.log(props)
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
                </View>
            </DrawerContentScrollView>
            <View style={styles.drawerBottom}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <MaterialIcons name="logout" size={24} color={colors.primary} />
                    <Text style={styles.signOutText}>{useText('signOut')}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default DrawerMenu

const styles = StyleSheet.create({
    drawer: {
        
    },
    nameText:{
        fontSize:20
    },
    viewProfileText:{
        fontSize:16
    },
    signOutText:{
        marginHorizontal:10,
        fontSize: 20,
        color: '#000'
    },
    backgroundImage: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop:50,
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
    }
})
