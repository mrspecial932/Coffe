import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer,persistStore} from "redux-persist";
import User from "./reducer.js/user";
import {logger} from "redux-logger";
import  Categories  from "./reducer.js/categories";
import  Cards  from "./reducer.js/card";
import Wishlist from "./reducer.js/Wishlist";

const rootReducer= combineReducers({
    user:User,
    categories :Categories,
    cards : Cards ,
    Wishlist: Wishlist
   
})  
const configuration ={
    key : "drdaka",
    storage : AsyncStorage,
    version: 916
}
const persistedReducer= persistReducer(configuration, rootReducer)
const store= configureStore({
    reducer :persistedReducer,
    middleware: getDefaultMiddleware =>{
        return getDefaultMiddleware({
            serializableCheck:false,
        });
    }
})
export default store;
export const persistor = persistStore(store);
persistor.flush();