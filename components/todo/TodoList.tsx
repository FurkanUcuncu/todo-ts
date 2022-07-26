import React from 'react';
import {StyleSheet, Animated} from "react-native";
import {useAppDispatch, useAppSelector} from '../../hooks/redux-hooks';
import { TodoType } from '../../types/TodoTypes';
import Todo from './Todo';
import { SwipeListView } from 'react-native-swipe-list-view';
import TodoActions from './TodoActions';
import {todoActions} from "../../store/todos/todoSlice";

interface IProps {
    handleEditTodo:(todo:TodoType)=>void
}

const TodoList: React.FC<IProps> = props => {
    const dispatch = useAppDispatch()
    const { todos } = useAppSelector(state => state?.todo)

    const closeRow = (rowMap:any, rowKey:number)  => {
        const currentIndex = todos.map((todo,index)=>todo.id === rowKey).indexOf(true)
        console.log(rowMap["1"])
        if (rowMap[currentIndex]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap:any, rowKey:number) => {
        dispatch(todoActions.deleteTodo({id: rowKey}))
        closeRow(rowMap, rowKey);
    };

    const onRowDidOpen = (rowKey:number) => {
        console.log('This row opened', rowKey);
    };

    const onLeftActionStatusChange = (rowKey:number) => {
        console.log('onLeftActionStatusChange', rowKey);
    };

    const onRightActionStatusChange = (rowKey:number) => {
        console.log('onRightActionStatusChange', rowKey);
    };

    const onRightAction = (rowKey:number) => {
        console.log('onRightAction', rowKey);
    };

    const onLeftAction = (rowKey:number) => {
        console.log('onLeftAction', rowKey);
    };

    return (
        <Animated.View
            style={{ flex:1 }}
            // entering={LightSpeedInRight}
            // exiting={LightSpeedOutRight}
            // layout={Layout.springify()}
        >
            {/* {
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
            } */}
            <SwipeListView
                data={todos}
                renderItem={(data, rowMap) => {
                    const rowHeightAnimatedValue = new Animated.Value(60);
                    return (
                        <Todo
                            id={data.item.id}
                            rowMap={rowMap}
                            text={data.item.text}
                            completed={data.item.completed}
                            handleEditTodo={() => props.handleEditTodo(data.item)}
                            removeTodo={() => deleteRow(rowMap, data.item.id)}
                            rowHeightAnimatedValue={rowHeightAnimatedValue}
                            rightActionState={false}
                        />
                    )
                }}
                renderHiddenItem={(data, rowMap) => {
                    const rowActionAnimatedValue = new Animated.Value(75);
                    const rowHeightAnimatedValue = new Animated.Value(60);
                    return(
                        <TodoActions
                            data={data}
                            rowMap={rowMap}
                            rowActionAnimatedValue={rowActionAnimatedValue}
                            rowHeightAnimatedValue={rowHeightAnimatedValue}
                            onClose={() => closeRow(rowMap, data.item.id)}
                            onDelete={() => deleteRow(rowMap, data.item.id)}
                            leftActionActivated={false}
                            rightActionActivated={false}
                            swipeAnimatedValue={false}
                        />
                    )
                }}
                leftOpenValue={75}
                rightOpenValue={-75}
                disableRightSwipe
                leftActivationValue={100}
                rightActivationValue={-200}
                leftActionValue={0}
                onRowDidOpen={()=>onRowDidOpen(5)}
                rightActionValue={-500}
                // onLeftAction={onLeftAction}
                onRightAction={()=>onRightAction(5)}
                // onLeftActionStatusChange={onLeftActionStatusChange}
                onRightActionStatusChange={()=>onRightActionStatusChange(5)}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
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
    rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
    },
    details: {
        fontSize: 12,
        color: '#999',
    },
})

export default TodoList;
