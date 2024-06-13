import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{},
    reducers:{
        cacheSearch: (state , action )=>{
            state = {...action.payload , ...state}
        }
    }
})

export const {cacheSearch} = searchSlice.actions;
export default searchSlice.reducer;