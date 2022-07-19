import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todos/todoSlice'

const store = configureStore({
    reducer: {
        todo:todoSlice.reducer
    }
})

export default store
