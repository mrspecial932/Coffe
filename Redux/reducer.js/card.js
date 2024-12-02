import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [

        {
            id:1,
            title : "Hot Cofffe",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [1,2],
            description : "Sugar , Milk or cream, Flavoured syprups, Cocoa powder ",
            NumOrder : "1",
            sizeOptions: [
                { "size": "12 fl oz", "price": 6 },
                { "size": "16 fl oz", "price": 7 },
                { "size": "20 fl oz", "price": 8 },
                { "size": "24 fl oz", "price": 9 }
               ],
               selectedSize: "12 fl oz", 
               totalPrice: 6 
        },

        {
            id:2,
            title : "Hot Milk Cofffe",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/studio-photo-cup-coffee_948544-4365.jpg?w=360",
            categoryIds : [2],
            description : " Milk,  Flavoured syprups, Cocoa powder ",
            NumOrder : "1",
            sizeOptions: [
                { "size": "12 fl oz", "price": 6 },
                { "size": "16 fl oz", "price": 7 },
                { "size": "20 fl oz", "price": 8 },
                { "size": "24 fl oz", "price": 9 }
               ],

               selectedSize: "12 fl oz", // Default size option
            totalPrice: 6  
        },
    
        {
            id:3,
            title : "Cold Cofffe",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/hand-holding-paper-coffee-cup-generated-by-ai_837315-3337.jpg?w=1060",
            categoryIds : [1,2],
            description : "Sugar , Milk or cream, Flavoured syprups, Cocoa powder ",
            NumOrder : "1",
            sizeOptions: [
                { "size": "12 fl oz", "price": 6 },
                { "size": "16 fl oz", "price": 7 },
                { "size": "20 fl oz", "price": 8 },
                { "size": "24 fl oz", "price": 9 }
               ],
               selectedSize: "12 fl oz", // Default size option
               totalPrice: 6 
        },

        {
            id:4,
            title : "Milky Cofffe",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/food-photography-coffee_897450-138.jpg?w=740",
            categoryIds : [1,4],
            description : "Sugar , Milk or cream, Flavoured syprups, Cocoa powder ",
            NumOrder : "1",
            sizeOptions: [
                { "size": "12 fl oz", "price": 6 },
                { "size": "16 fl oz", "price": 7 },
                { "size": "20 fl oz", "price": 8 },
                { "size": "24 fl oz", "price": 9 }
               ],
               selectedSize: "12 fl oz", // Default size option
               totalPrice: 6 
        },

        {
            id:5,
            title : "Low sugar ",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [1,5],
            description : " Milk,  Flavoured syprups, Cocoa powder ",
            NumOrder : "1",
            sizeOptions: [
                { "size": "12 fl oz", "price": 6 },
                { "size": "16 fl oz", "price": 7 },
                { "size": "20 fl oz", "price": 8 },
                { "size": "24 fl oz", "price": 9 }
               ],
               selectedSize: "12 fl oz", // Default size option
               totalPrice: 6 
        },
    
        {
            id:8,
            title : "Cofffe with Ice",
            badge : "4.3",
            uri : "https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg",
            categoryIds : [1,4],
            description : "Sugar , Milk or cream, Flavoured syprups, Cocoa powder ",
            NumOrder : "1",
            sizeOptions: [
             { "size": "12 fl oz", "price": 6 },
             { "size": "16 fl oz", "price": 7 },
             { "size": "20 fl oz", "price": 8 },
             { "size": "24 fl oz", "price": 9 }
            ],
            selectedSize: "12 fl oz", // Default size option
            totalPrice: 6 
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
         },
         addItem(state, action){
            const newItem = action.payload;

            // Check if the item with the same id exists in the cart
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id && item.selectedSize === newItem.selectedSize);
            
            if (existingItemIndex >= 0) {
                // If item exists, overwrite it by updating the quantity or other properties
                state.items[existingItemIndex] = newItem;  // You can also modify specific properties like quantity here
            } else {
                // If item does not exist, add the new item to the array
                state.items.push(newItem);
            }
         } ,
         deleteItem(state, action){
            state.items = state.items.filter((item)=>item.id !==action.payload);
         },
         increaseItemQuantity(state, action) {
            const { id, selectedSize } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.NumOrder++;
                const sizeOption = item.sizeOptions.find(option => option.size === selectedSize);
                item.totalPrice = item.NumOrder * (sizeOption ? sizeOption.price : 0);
        
                // Update selectedCardInformation with the modified item
                if (state.selectedCardId === id) {
                    state.selectedCardInformation = { ...item };
                }
            }
        },
       
        updateSelectedSize: (state, action) => {
            const { id, selectedSize } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            
            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                const sizeOption = item.sizeOptions.find(option => option.size === selectedSize);
                const updatedItem = {
                    ...item,
                    selectedSize,
                    totalPrice: item.NumOrder * (sizeOption ? sizeOption.price : 0),
                };
        
                // Update items immutably
                state.items = [
                    ...state.items.slice(0, itemIndex),
                    updatedItem,
                    ...state.items.slice(itemIndex + 1),
                ];
        
                // Update `selectedCardInformation` if it's the currently selected item
                if (state.selectedCardId === id) {
                    state.selectedCardInformation = { ...updatedItem };
                }
            }
        },
        
        decreaseItemQuantity(state, action) {
            const { id, selectedSize } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item && item.NumOrder > 1) {  // Prevent going below 1
                item.NumOrder--;
                const sizeOption = item.sizeOptions.find(option => option.size === selectedSize);
                item.totalPrice = item.NumOrder * (sizeOption ? sizeOption.price : 0);
        
                // Update selectedCardInformation with the modified item
                if (state.selectedCardId === id) {
                    state.selectedCardInformation = { ...item };
                }
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        
        
          clearCart(state){
            state.cart= [];
          }
        } 
})
export const { resetCard, updateSelectedCardId,removeFromCart, addItem, deleteItem, increaseItemQuantity,decreaseItemQuantity,updateSelectedSize, clearCart } = Cards.actions;
export default Cards.reducer;