import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import chatSlice from './chatSlice'
import searchSlice from './searchSlice'
import useReducer from './userSlice'
const Store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        user: useReducer
    }
    
})

export default Store