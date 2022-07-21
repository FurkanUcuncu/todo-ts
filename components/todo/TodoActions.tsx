import React from 'react';
import {Text, StyleSheet, Animated, TouchableOpacity} from "react-native";
import {IconButton} from "react-native-paper";
import {TodosType} from "../../types/TodoTypes";

interface IProps{
    data:any
    rowMap:any,
    rowActionAnimatedValue:any
    rowHeightAnimatedValue:any
    onClose:() => void
    onDelete:() => void,
    swipeAnimatedValue:any,
    leftActionActivated:any,
    rightActionActivated:any
}

const TodoActions:React.FC<IProps> = props => {

    if (props.rightActionActivated) {
        Animated.spring(props.rowActionAnimatedValue, {
            toValue: 500,
            useNativeDriver: false
        }).start();
    } else {
        Animated.spring(props.rowActionAnimatedValue, {
            toValue: 75,
            useNativeDriver: false
        }).start();
    }

    return (
        <Animated.View style={[styles.rowBack, {height: props.rowHeightAnimatedValue}]}>
            <Text>Left</Text>
            {/*{!props.leftActionActivated && (*/}
            {/*<TouchableOpacity*/}
            {/*    style={[styles.backRightBtn, styles.backRightBtnLeft]}*/}
            {/*    onPress={props.onClose}>*/}
            {/*    <IconButton*/}
            {/*        icon="close-circle-outline"*/}
            {/*        color="#fff"*/}
            {/*        size={20}*/}
            {/*    />*/}
            {/*</TouchableOpacity>*/}
            {/*)}*/}
            {!props.leftActionActivated && (
            <Animated.View
                style={[
                    styles.backRightBtn,
                    styles.backRightBtnRight,
                    {
                        flex: 1,
                        width: props.rowActionAnimatedValue,
                    },
                ]}>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={props.onDelete}>
                    <Animated.View
                        style={[
                            styles.trash,
                            {
                                transform: [
                                    {
                                        scale: props.swipeAnimatedValue.interpolate({
                                            inputRange: [-70, -30],
                                            outputRange: [1.3, 0],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}>
                        <IconButton
                            icon="delete"
                            color="#fff"
                            size={20}
                        />
                    </Animated.View>
                </TouchableOpacity>
            </Animated.View>
            )}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
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
        justifyContent:'center',
        alignItems:'center'
    },
});

export default TodoActions;
