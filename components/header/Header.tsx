import React from 'react';
import { View, Text } from "react-native";
import { Appbar } from 'react-native-paper';

const Header: React.FC = props => {
    const _goBack = () => props.navigation.goBack();
    return (
        <Appbar.Header dark>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="menu" onPress={()=>{}} />
        </Appbar.Header>
    );
}

export default Header;
