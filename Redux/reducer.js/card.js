import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [

        {
            id:1,
            title : "Hot Cofffe",
            price : "20",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [1,2],
            description : "Sugar , Milk or cream, Flavoured syprups, Cocoa powder ",
            NumOrder : "1"
        },

        {
            id:2,
            title : "Hot Milk Cofffe",
            price : "15",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [2],
            description : " Milk,  Flavoured syprups, Cocoa powder ",
            NumOrder : "1"
        },
    
        {
            id:3,
            title : "Cold Cofffe",
            price : "22",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [1,2],
            description : "Sugar , Milk or cream, Flavoured syprups, Cocoa powder ",
            NumOrder : "1"
        },

        {
            id:4,
            title : "Milky Cofffe",
            price : "20",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [1,4],
            description : "Sugar , Milk or cream, Flavoured syprups, Cocoa powder ",
            NumOrder : "1"
        },

        {
            id:5,
            title : "Low sugar ",
            price : "15",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [1,5],
            description : " Milk,  Flavoured syprups, Cocoa powder ",
            NumOrder : "1"
        },
    
        {
            id:8,
            title : "Cofffe with Ice",
            price : "22",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [1,4],
            description : "Sugar , Milk or cream, Flavoured syprups, Cocoa powder ",
            NumOrder : "1"
        },
    
   
    
     
    ],
    selectedCardId : null,
    selectedCardInformation : {},
}

const Cards =  createSlice ({
    name :" cards",
    initialState: initialState,
    reducers :{
        resetCard : () =>{
            return initialState;
        },
         updateSelectedCardId: (state , action )=>{
            state.selectedCardId = action.payload;
            state.selectedCardInformation= state.items.find(item=>item.id===action.payload)
         }
    }
})
export const {resetCard, updateSelectedCardId}= Cards.actions;
export default Cards.reducer;