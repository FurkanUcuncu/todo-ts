import React, { useState } from 'react';
import {View, Text} from "react-native";
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../store/todos/todoSlice';

const Home = () => {
    const dispatch = useDispatch()
    const { todos } = useSelector(state => state?.todo)
    const [text,setText] = useState<string>("")
    return (
        <View style={{backgroundColor:'#fff'}}>
            <TextInput
                mode="outlined"
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                onSubmitEditing={()=>dispatch(todoActions.setTodos({id:Math.random(),text}))}
            />
            {
                todos.map((todo) => {
                    return (
                        <Text key={todo.id}>{todo.text}</Text>
                    )
                })
            }
        </View>
    );
}

export default Home;
