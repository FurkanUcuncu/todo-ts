import React from 'react';
import {Keyboard, ScrollView, TouchableWithoutFeedback, View} from "react-native";
import Header from '../header/Header';

interface ILayoutProps {
    children:React.ReactNode,
    backIcon?:boolean | undefined,
}

const Layout: React.FC<ILayoutProps> = props => {
    return (
        <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <Header backIcon={props.backIcon} />
                <View style={{flex:1,margin:20,}}>
                    {props.children}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Layout;
