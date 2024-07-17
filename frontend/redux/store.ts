import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import ModalState from './modalSlice';
import coinDataReducer from "./coinDataSlice";
export const store = configureStore({
    reducer: {
        coinData: coinDataReducer,
        modal: ModalState
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



// export interface RootState {
//     coinData: CoinDataState;
//     modal: ModalState;
// }