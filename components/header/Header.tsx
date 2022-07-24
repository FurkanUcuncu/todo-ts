import React from 'react';
import { Appbar } from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";

interface IProps {
    backIcon: boolean | undefined,
    headerText:string
}

const Header: React.FC<IProps> = ({backIcon,headerText}) => {
    const navigation = useNavigation()
    const _goBack = () => {
        navigation.goBack()
    };
    return (
        <Appbar.Header dark>
            {
                backIcon &&
                <Appbar.BackAction onPress={_goBack} />
            }
            <Appbar.Content title={headerText} />
            <Appbar.Action icon="menu" onPress={()=>{}} />
        </Appbar.Header>
    );
}

export default Header;
