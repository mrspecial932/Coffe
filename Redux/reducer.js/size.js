import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    Size :[
        {
            id:1,
            name: "12 f1 Qz"
        },
        {
            id:2,
            name: "16 f1 Qz"
        },
        {
            categoryid:3,
            name:  "20 f1 Qz"
        },
        {
            categoryid:4,
            name: "22 f1 qz "
        },
       
    ] ,
    selectedSizeId:1, 
}

const Sizes = createSlice({
    name: "Sizes",
    initialState: initialState,
    reducers:{   
       resetSize : () =>{
        return initialState;
       },
       updateSelectedSize: (state, action)=>{
         state.selectedCategoryId=action.payload;
       }
    }
})
export default Sizes.reducer;
export  const {resetSize ,  updateSelectedSize}= Sizes.actions;