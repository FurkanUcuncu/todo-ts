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
    const { colors } = useTheme()
    const textColor = colors?.body?.text
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
            <KeyboardAvoidingView style={{flex:1,justifyContent:'space-between',backgroundColor:colors?.body?.bg}}>
                {
                    todos.length === 0 ?
                        <Text style={{ textAlign: 'center', fontSize: 20, color:textColor }}>{useText('noTodos')}</Text> :
                        <TodoList
                            handleEditTodo={handleEditTodo}
                        />
                }
                <View style={[styles.bottomContainer,{...colors?.shadow}]}>
                    <TextInput
                        autoCorrect={false}
                        style={[styles.input, { borderWidth:0, color:textColor, backgroundColor:colors?.todo?.bg}]}
                        mode="flat"
                        underlineColor={colors?.body?.bg}
                        label={useText('addTodo')}
                        value={text}
                        onChangeText={text => setText(text)}
                        onSubmitEditing={handleAddTodo}
                        placeholderTextColor={colors?.body?.unSelected}
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
        alignItems: 'center',
        position: 'relative',
    },
    input: {
        backgroundColor: '#fff',
        flex: 1,
        // borderWidth:0,
        // borderRadius: 20,
        overflow:'hidden'
    },
    sendBtn: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom:0,
        height: 55,
        width: 55,
        // borderWidth: 1,
        // borderRadius:22.5
    }
})

export default Home;
