import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "abc",
    initialState: {
        isToggleMenu: true,
        isDarkMode: false
    },
    reducers: {
        toggleMenu: (state)=>{
            state.isToggleMenu=!state.isToggleMenu
        },
        closeMenu: (state)=>{
            state.isToggleMenu = false;
        },
        DarkMode: (state)=>{
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

export default appSlice.reducer;
export const {toggleMenu,closeMenu , DarkMode} = appSlice.actions;