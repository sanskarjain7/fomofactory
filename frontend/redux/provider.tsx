// import { createStore combineReducers } from 'redux';
// import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import thunkMiddleware from 'redux-thunk';

// const initialState = {
//     coinData: [],
// };

// // Action Types
// const SET_COIN_DATA = 'SET_COIN_DATA';

// // Reducer
// function coinDataReducer(state = initialState, action: { type: any; payload: any; }) {
//     switch (action.type) {
//         case SET_COIN_DATA:
//             return {
//                 ...state,
//                 coinData: action.payload,
//             };
//         default:
//             return state;
//     }
// }

// // Action Creator
// export const setCoinData = (data: any) => ({
//     type: SET_COIN_DATA,
//     payload: data,
// });

// const rootReducer = combineReducers({
//     coinData: coinDataReducer,
// });

// export function initializeStore() {
//     return configureStore(rootReducer, applyMiddleware([thunkMiddleware]));
// }

'use client'

import { store } from "./store"
import { Provider } from 'react-redux'
import React from "react"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}