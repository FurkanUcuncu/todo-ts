import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from './settings/settingsSlice'
import todoSlice from './todos/todoSlice'

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        settings: settingsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
