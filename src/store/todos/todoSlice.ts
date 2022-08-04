import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodosType, TodoType} from "../../models/TodoTypes";

const initialTodoState:TodosType = {
    todos:[],
    todo:{
        id:0,
        text:"",
        completed:false
    }
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodoState,
    reducers: {
        setTodos: function (state, action: PayloadAction<TodoType>) {
            state.todos = [action.payload, ...state.todos]
        },
        updateTodo: function (state,action:PayloadAction<TodoType[]>){
            state.todos = action.payload
        },
        deleteTodo:function(state,action:PayloadAction<{ id:number }>){
            state.todos = state.todos.filter((todo:TodoType)=>todo.id !== action.payload.id )
        }
    },
})

export const todoActions = todoSlice.actions

export default todoSlice
