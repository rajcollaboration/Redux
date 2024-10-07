import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterReducer from './Reducers/counterReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    devTools: process.env.NODE_ENV !== 'production',
});


const store = configureStore({
  reducer: rootReducer,  
});

export default store;