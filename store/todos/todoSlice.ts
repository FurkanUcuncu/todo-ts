import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodosType, TodoType} from "../../types/TodoTypes";

// export const fetchLoginData = createAsyncThunk('login/fetchLogin',
//     async ({params,userType}, { dispatch }) => {
//         return res = await authService.getLoginData({ ...params })
//     }
// )

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
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchLoginData.fulfilled, (state, action) => {
    //         state.token = action.payload.data.Item1
    //         state.userInfos = action.payload.data.Item2
    //     })
    //     builder.addCase(fetchLoginData.pending, (state) => {
    //         state.messageText = "Giriş Yapılıyor..."
    //     })
    //     builder.addCase(fetchLoginData.rejected, (state) => {
    //         state.messageText = "Giriş Yaparken Bir Hata Oluştu..."
    //     })
    // }
})

export const todoActions = todoSlice.actions

export default todoSlice
