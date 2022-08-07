import { createSlice } from "@reduxjs/toolkit";
import { Language } from "../../language/Language";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        darkTheme: false,
        language: Language["en"],
    },
    reducers: {
        changeTheme(state) {
            state.darkTheme = !state.darkTheme
        },
        changeLanguage(state, action) {
            state.language = action.payload
        },
    }
})

export const settingsActions = settingsSlice.actions

export default settingsSlice