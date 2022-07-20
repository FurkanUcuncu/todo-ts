import React from 'react';
import { Appbar } from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";

interface Props {
    backIcon:boolean | undefined
}

const Header: React.FC<Props> = ({backIcon}) => {
    const navigation = useNavigation()
    const _goBack = () => {
        navigation.goBack()
    console.log(JSON.stringify(navigation) + "nav")
    };
    return (
        <Appbar.Header dark>
            {
                backIcon &&
                <Appbar.BackAction onPress={_goBack} />
            }
            <Appbar.Content title="Title" />
            <Appbar.Action icon="menu" onPress={()=>{}} />
        </Appbar.Header>
    );
}

export default Header;
