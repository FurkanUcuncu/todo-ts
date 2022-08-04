import React from 'react';
import {View} from "react-native";
import {useAppDispatch, useAppSelector} from '../../hooks/redux-hooks';
import { TodoType } from '../../models/TodoTypes';
import Todo from './Todo';
import {todoActions} from "../../store/todos/todoSlice";

interface IProps {
    handleEditTodo:(todo:TodoType)=>void
}

const TodoList: React.FC<IProps> = props => {
    const dispatch = useAppDispatch()
    const { todos } = useAppSelector(state => state?.todo)

    const deleteRow = (todo:TodoType) => {
        dispatch(todoActions.deleteTodo({id: todo.id}))
    };

    return (
        <View
            style={{ flex:1 }}
        >
            {
                todos.map((item:TodoType) => {
                    return (
                        <View key={item.id} style={{marginBottom:15}}>
                            <Todo
                                handleEditTodo={()=>props.handleEditTodo(item)}
                                onSwipe={()=>deleteRow(item)}
                                {...{ item }}
                            />
                        </View>
                    )
                })
            }
        </View>
    );
}

export default TodoList;
