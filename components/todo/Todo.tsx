import React from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from "react-native";
import {Checkbox, useTheme} from 'react-native-paper';
import { TodoType } from '../../types/TodoTypes';

interface IProps{
    id:number,
    text:string,
    completed:boolean,
    handleEditTodo: () => void,
    removeTodo: (rowMap: TodoType, id: number) => void,
    rowHeightAnimatedValue: any
}

const Todo:React.FC<IProps> = props => {
    const { colors } = useTheme()

    return (
        <Animated.View style={[styles.rowFront,{height: props.rowHeightAnimatedValue}]}>
            <TouchableOpacity onPress={props.handleEditTodo}>
                <Checkbox.Item position="leading" color={colors.primary} labelStyle={{width:'100%', textAlign:'left',textDecorationLine: props.completed ? 'line-through' : 'none'}} label={props.text} status={props.completed ? "checked" : "unchecked"} />
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    row: {
        // flexDirection:'row'
    },
    rowFront: {
        justifyContent:'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        margin: 5,
        marginBottom: 15,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});

export default Todo;
