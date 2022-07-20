import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Checkbox, useTheme} from 'react-native-paper';

interface IProps{
    
}

const TodoActions:React.FC<IProps> = props => {

    return (
        <View style={styles.rowBack}>
            <Text>Left</Text>
            <Text>Right</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
    },
});

export default TodoActions;
