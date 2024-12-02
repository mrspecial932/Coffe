import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Initialize as an empty array
  selectedCardId: null,
  selectedCardInformation: {},
};

const Wishlist = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    resetCard: () => {
      return initialState;
    },
    updateSelectedCardId: (state, action) => {
      state.selectedCardId = action.payload;
      state.selectedCardInformation = state.items.find((item) => item.id === action.payload);
    },
    addItem(state, action) {
      const newItem = action.payload;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id && item.selectedSize === newItem.selectedSize
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex] = newItem;
      } else {
        state.items.push(newItem);
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleItem(state, action) {
      const item = action.payload;  // This is the entire item, not just the id
    
      // Check if the item already exists in the wishlist
      const itemExists = state.items.some((existingItem) => existingItem.id === item.id);
    
      if (itemExists) {
        // Remove the item if it exists
        state.items = state.items.filter((existingItem) => existingItem.id !== item.id);
      } else {
        // Add the item dynamically with all its properties
        state.items.push(item);  // Add the full item, not just the id
      }
    }
    
  },
});

export const { addItem, deleteItem, updateSelectedCardId, resetCard, toggleItem } = Wishlist.actions;
export default Wishlist.reducer;
