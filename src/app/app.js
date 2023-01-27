import { createSlice } from "@reduxjs/toolkit";
const initialState={
    darkMode:false
}


const appSlice= createSlice({
    name:"App",
    initialState,
    reducers:{
        setDark:(state,action)=>{
            state.darkMode=action.payload;
        }
    }
})

export const{setDark}=appSlice.actions;
export default appSlice.reducer