import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from "react-native";
import {Checkbox, useTheme} from 'react-native-paper';
import { TodoType } from '../../models/TodoTypes';
import Item from '../swipe/Item';

interface IProps{
    id:number,
    text:string,
    completed:boolean,
    handleEditTodo: () => void,
    removeTodo: (rowMap: TodoType, id: number) => void,
    rowMap:any,
    rowHeightAnimatedValue: any,
    rightActionState:any
}

const Todo:React.FC<IProps> = props => {
    const { colors } = useTheme()

    if(props.rightActionState){
        Animated.timing(props.rowHeightAnimatedValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start(() => {
            props.removeTodo(props.rowMap,props.id);
        });
    }

    return (
        <View style={[styles.rowFront,{height: props.rowHeightAnimatedValue}]}>
            <Item
                onSwipe={() => {
                    const newItems = [...items];
                    newItems.splice(newItems.indexOf(item), 1);
                    setItems(newItems);
                }}
                {...{ item }}
            />
        </View>
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
