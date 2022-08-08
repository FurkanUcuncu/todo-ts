import React from 'react';
import {Keyboard, StatusBar, TouchableWithoutFeedback, View} from "react-native";
import { useTheme } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from '../header/Header';

interface ILayoutProps {
    children:React.ReactNode,
    backIcon?: boolean | undefined,
    headerText:string
}

const Layout: React.FC<ILayoutProps> = props => {
    const {colors} = useTheme()
    return (
        <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
            <>
                <StatusBar barStyle="light-content" />
                <View style={{ flex: 1, backgroundColor: colors.bodyBg }}>
                    <Header headerText={props.headerText} backIcon={props.backIcon} />
                    <View style={{flex:1,margin:20,}}>
                        {props.children}
                    </View>
                </View>
            </>
        </TouchableWithoutFeedback>
    );
}

export default Layout;
