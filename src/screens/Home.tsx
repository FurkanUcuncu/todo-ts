import React, { useState } from 'react';
import {KeyboardAvoidingView, View, StyleSheet, Text} from "react-native";
import {TextInput,IconButton, useTheme} from 'react-native-paper';
import {todoActions} from '../store/todos/todoSlice';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import Layout from "../components/layout/Layout";
import {TodoType} from "../models/TodoTypes";
import TodoList from '../components/todo/TodoList';
import {useText} from "../context/SettingsContext";

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const {colors} = useTheme()
    const { todos } = useAppSelector(state => state?.todo)
    const [text,setText] = useState<string>("")
    const handleEditTodo = (currentTodo:TodoType) => {
        dispatch(todoActions.updateTodo(todos.map((todo:TodoType)=>todo.id === currentTodo.id ? {...todo,completed:!currentTodo.completed} : todo)))
    }
    const handleAddTodo = () => {
        if (text !== "") {
            dispatch(todoActions.setTodos({id:Math.random(),text,completed:false}))
        }
        setText('')
    }
    return (
        <Layout headerText={useText('home')}>
            <KeyboardAvoidingView style={{flex:1,justifyContent:'space-between',backgroundColor:colors.bodyBg}}>
                {
                    todos.length === 0 ?
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>{useText('noTodos')}</Text> :
                        <TodoList
                            handleEditTodo={handleEditTodo}
                        />
                }
                <View style={styles.bottomContainer}>
                    <TextInput
                        autoCorrect={false}
                        style={{backgroundColor:'#fff',flex:1, borderRadius:20}}
                        mode="outlined"
                        label={useText('addTodo')}
                        value={text}
                        onChangeText={text => setText(text)}
                        onSubmitEditing={handleAddTodo}
                    />
                    <IconButton
                        style={[styles.sendBtn, { borderColor: colors.primary }]}
                        icon="send"
                        color={colors.primary}
                        size={20}
                        onPress={handleAddTodo}
                    />
                </View>
            </KeyboardAvoidingView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        flexDirection: 'row',
        alignItems:'center'
    },
    sendBtn: {
        borderWidth: 1,
        height: 55,
        width: 55,
        borderRadius:22.5
    }
})

export default Home;
