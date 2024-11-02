import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux"
import store from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from "./Redux/store";

function App(){

   return(
      <Provider store={store}>  
      <PersistGate persistor={persistor} loading={null}>
           <NavigationContainer>
            <MainNavigation/>
            </NavigationContainer>
      </PersistGate>
  </Provider>

   )
}


export default App;
