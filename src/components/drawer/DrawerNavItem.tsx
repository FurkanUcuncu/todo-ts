import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {Text, useTheme} from 'react-native-paper'

interface IDrawerNavItemProps {
    text:string,
    icon:React.ReactNode,
    isActive:boolean,
    onPress:()=>void
}

const DrawerNavItem:React.FC<IDrawerNavItemProps> = ({ onPress, text, icon, isActive }) => {
    const { colors } = useTheme()
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {icon}
            <Text style={[styles.text, {color: isActive ? colors.primary : 'white'}]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default DrawerNavItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    text:{
        marginHorizontal: 10,
        fontSize:14
    }
})
