import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState :{
        showGptSearch : false
    },
    reducers : {
        togglegptSerchView : (state,action) =>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const {togglegptSerchView} = gptSlice.actions;
export default gptSlice.reducer;