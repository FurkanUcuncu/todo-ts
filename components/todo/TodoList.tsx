import React from 'react';
import { StyleSheet,View,Text,Animated } from "react-native";
import { useAppSelector } from '../../hooks/redux-hooks';
import { TodoType } from '../../types/TodoTypes';
import Todo from './Todo';
// import Animated, { Layout, LightSpeedInRight, LightSpeedOutRight } from 'react-native-reanimated'
import { SwipeListView } from 'react-native-swipe-list-view';
import TodoActions from './TodoActions';

interface IProps {
    handleEditTodo:(todo:TodoType)=>void
}

const TodoList: React.FC<IProps> = props => {
    const { todos } = useAppSelector(state => state?.todo)

    const closeRow = (rowMap:TodoType[], rowKey:number) => {
        // if (rowMap[rowKey]) {
        //     rowMap[rowKey].closeRow();
        // }
    };

    const deleteRow = (rowMap, rowKey) => {
        console.log(rowMap,rowKey)
        closeRow(rowMap, rowKey);
        // const newData = [...listData];
        // const prevIndex = listData.findIndex(item => item.key === rowKey);
        // newData.splice(prevIndex, 1);
        // setListData(newData);
    };

    return (
        <Animated.View
            style={{ marginTop: 20 }}
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
                            text={data.item.text}
                            completed={data.item.completed}
                            handleEditTodo={() => props.handleEditTodo(data.item)}
                            removeTodo={() => deleteRow(rowMap, data.item.id)}
                            rowHeightAnimatedValue={rowHeightAnimatedValue}
                        />
                    )
                }}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <Text>Left</Text>
                        <Text>Right</Text>
                    </View>
                )}
                rightOpenValue={-150}
                disableRightSwipe
                leftActivationValue={100}
                rightActivationValue={-200}
                leftActionValue={0}
                rightActionValue={-500}
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
