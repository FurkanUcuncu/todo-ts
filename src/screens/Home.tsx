import React, { useState } from 'react';
import {KeyboardAvoidingView, View} from "react-native";
import {TextInput} from 'react-native-paper';
import {todoActions} from '../store/todos/todoSlice';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {HomeScreen} from "../routes/StackNavigator";
import Layout from "../components/layout/Layout";
import {TodoType} from "../models/TodoTypes";
import TodoList from '../components/todo/TodoList';

const Home: React.FC<HomeScreen> = props => {
    const dispatch = useAppDispatch()
    const { todos } = useAppSelector(state => state?.todo)
    const [text,setText] = useState<string>("")
    const handleEditTodo = (currentTodo:TodoType) => {
        dispatch(todoActions.updateTodo(todos.map((todo:TodoType)=>todo.id === currentTodo.id ? {...todo,completed:!currentTodo.completed} : todo)))
    }
    const handleAddTodo = () => {
        dispatch(todoActions.setTodos({id:Math.random(),text,completed:false}))
        setText('')
    }
    return (
        <Layout headerText="Home">
            <KeyboardAvoidingView style={{flex:1,justifyContent:'space-between'}}>
                <TodoList
                    handleEditTodo={handleEditTodo}
                />
                <TextInput
                    autoCorrect={false}
                    style={{backgroundColor:'#fff'}}
                    mode="outlined"
                    label="Type a to do"
                    value={text}
                    onChangeText={text => setText(text)}
                    onSubmitEditing={handleAddTodo}
                />
            </KeyboardAvoidingView>
        </Layout>
    );
}

export default Home;