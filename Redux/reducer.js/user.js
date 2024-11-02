import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    firstName: "Abby",
    lastName : "Special",
    userId: 1,
};

export const User= createSlice({
    name : "user",
    initialState: initialState,
    reducers:{
        updateFirstName :(state, action)=>{
            state.firstName = action.payload.firstName;   
        },
        resettoInitialState : ()=>{
            return initialState
        }
    }
})
export const {updateFirstName ,resettoInitialState} = User.actions;
export default User.reducer;