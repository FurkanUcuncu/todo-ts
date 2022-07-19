import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// export const fetchLoginData = createAsyncThunk('login/fetchLogin',
//     async ({params,userType}, { dispatch }) => {
//         return res = await authService.getLoginData({ ...params })
//     }
// )

export interface Todo {
    id: number,
    text:string,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: {},
        todos: [],
    },
    reducers: {
        setTodos(state, action:PayloadAction<Todo>) {
            state.todos = [action.payload,...state.todos]
        },
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
