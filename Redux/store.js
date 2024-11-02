import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer,persistStore} from "redux-persist";
import User from "./reducer.js/user";
import {logger} from "redux-logger";
import  Categories  from "./reducer.js/categories";
import  Cards  from "./reducer.js/card";
import Sizes from "./reducer.js/size";

const rootReducer= combineReducers({
    user:User,
    categories :Categories,
    Size :Sizes,
    cards : Cards 
})  
const configuration ={
    key : "21g",
    storage : AsyncStorage,
    version: 21,
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