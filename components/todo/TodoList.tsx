import React from 'react';
import { View } from "react-native";
import { useAppSelector } from '../../hooks/redux-hooks';
import { TodoType } from '../../types/TodoTypes';
import Todo from './Todo';
import Animated, { Layout, LightSpeedInRight, LightSpeedOutRight } from 'react-native-reanimated'

interface Props {
    handleEditTodo:(todo:TodoType)=>void
}

const TodoList: React.FC<Props> = props => {
    const { todos } = useAppSelector(state => state?.todo)

    return (
        <Animated.View
            style={{ marginTop: 20 }}
            entering={LightSpeedInRight}
            exiting={LightSpeedOutRight}
            layout={Layout.springify()}
        >
            {
                todos.map((todo:TodoType) => {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            handleEditTodo={()=>props.handleEditTodo(todo)}
                        />
                    )
                })
            }
        </Animated.View>
    );
}

export default TodoList;
