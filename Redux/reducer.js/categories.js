import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    categories :[
        {
            categoryid:1,
            name: "❤ All"
        },
        {
            categoryid:2,
            name: " 🧊 Ice coffe"
        },
        {
            categoryid:3,
            name:  " ☕ Hot coffe"
        },
        {
            categoryid:4,
            name: "🍦 Sugar Coffe"
        },
        {
            categoryid:5,
            name: "🥛 Non sugar "
        }
    ] ,
    selectedCategoryId:1, 
}

const Categories = createSlice({
    name: "categories",
    initialState: initialState,
    reducers:{   
       resetCategories : () =>{
        return initialState;
       },
       updateSelectedCategoryId: (state, action)=>{
         state.selectedCategoryId=action.payload;
       }
    }
})
export default Categories.reducer;
export  const {resetCategories , updateSelectedCategoryId}= Categories.actions;