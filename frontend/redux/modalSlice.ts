import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from './store';

export interface Coin {
    name: string;
    symbol: string;
}

export interface ModalState {
    isOpen: boolean;
    selectedCoin: Coin;
}

const defaultSelectedCoin: Coin = { name: 'Bitcoin', symbol: 'BTC' };
const storedSelectedCoin = typeof (window) != 'undefined' ? localStorage.getItem('selectedCoin') : null;
const parsedSelectedCoin = storedSelectedCoin ? JSON.parse(storedSelectedCoin) : defaultSelectedCoin;

const initialState: ModalState = {
    isOpen: false,
    selectedCoin: parsedSelectedCoin,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true;
        },
        closeModal(state) {
            state.isOpen = false;
        },
        selectCoin(state, action: PayloadAction<Coin>) {
            state.selectedCoin = action.payload;
        },
    },
});

export const { openModal, closeModal, selectCoin } = modalSlice.actions;
export const modal = (state: RootState) => state.modal;
export default modalSlice.reducer;

export type RootState = ReturnType<typeof store.getState>;

