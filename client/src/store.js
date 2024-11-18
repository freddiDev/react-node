import { configureStore } from '@reduxjs/toolkit';
import { thunk as reduxThunk } from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    preloadState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxThunk),
    devTools: true
})

export default store;
