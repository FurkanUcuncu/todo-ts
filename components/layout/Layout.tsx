import React from 'react';
import {ScrollView,View} from "react-native";
import Header from '../header/Header';

const Layout: React.FC = ({children,navigation}) => {
    return (
        <>
            <Header navigation={navigation} />
            <ScrollView contentContainerStyle={{flex:1,padding:20}}>
                {children}
            </ScrollView>
        </>
    );
}

export default Layout;
