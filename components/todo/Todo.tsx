import React from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Button, Checkbox, useTheme} from 'react-native-paper';
import {TodoType} from "../../types/TodoTypes";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {todoActions} from "../../store/todos/todoSlice";

interface Props{
    id:number,
    text:string,
    completed:boolean,
    handleEditTodo:()=>void
}

const Todo:React.FC<Props> = props => {
    const {colors} = useTheme()
    const dispatch = useAppDispatch()
    const {todos} = useAppSelector(state=>state?.todo)

    return (
        <View style={styles.row}>
            <TouchableOpacity onPress={props.handleEditTodo}>
                <Checkbox.Item position="leading" color={colors.primary} labelStyle={{width:'100%', textAlign:'left',textDecorationLine: props.completed ? 'line-through' : 'none'}} label={props.text} status={props.completed ? "checked" : "unchecked"} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    }
})

export default Todo;
