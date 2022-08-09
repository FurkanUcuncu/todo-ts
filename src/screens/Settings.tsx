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
    const { colors } = useTheme()

    const { toggleTheme, isThemeDark, changeLanguage, language } = useContext(SettingsContext);

    const textColor = colors?.body?.text

    return (
        <Layout headerText={useText('settings')}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={[styles.themeText,{color:textColor}]}>{useText('light')}</Text>
                    <Switch value={isThemeDark} onValueChange={toggleTheme} />
                    <Text style={[styles.themeText,{color:textColor}]}>{useText('dark') }</Text>
                </View>
                <View style={styles.languageContainer}>
                    {
                        data.map((item) => {
                            return (
                                <TouchableOpacity key={item.code} onPress={() => changeLanguage(item.code)}>
                                    <Text
                                        style={
                                            [styles.languageText,
                                                {
                                                    color: textColor,
                                                    fontWeight: item.code === language.code ? 'bold' : 'normal'
                                                }
                                            ]
                                        }
                                    >
                                        {item.name}
                                    </Text>
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:30,
    },
    themeText: {
        marginHorizontal: 10,
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
