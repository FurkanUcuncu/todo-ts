import React, { useContext } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useTheme, Switch} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import Layout from "../components/layout/Layout";
import {SettingsContext, useText} from '../context/SettingsContext';

const data = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' }
]

const Settings: React.FC = () => {
    const dispatch = useAppDispatch()

    const { colors } = useTheme()

    const { toggleTheme, isThemeDark, changeLanguage, language } = useContext(SettingsContext);

    return (
        <Layout headerText={useText('settings')}>
            <View style={styles.container}>
                <Switch value={isThemeDark} onValueChange={toggleTheme} />
                <View style={styles.languageContainer}>
                    {
                        data.map((item) => {
                            return (
                                <TouchableOpacity key={item.code} onPress={() => changeLanguage(item.code)}>
                                    <Text style={[styles.languageText,{fontWeight:item.code === language.code ? 'bold' : 'normal'}]} >{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems:'center'
    },
    sendBtn: {
        borderWidth: 1,
        height: 55,
        width: 55,
        borderRadius:22.5
    },
    languageContainer: {
        flexDirection: 'row',
    },
    languageText: {
        marginTop: 10,
        marginHorizontal: 10,
    },
})

export default Settings;
