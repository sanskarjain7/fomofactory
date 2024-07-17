import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from './store';

export interface Coin {
    // Define the properties of the Coin type here
}

export interface ModalState {
    isOpen: boolean;
    selectedCoin: Coin | null;
}

const initialState: ModalState = {
    isOpen: false,
    selectedCoin: null,
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

export default modalSlice.reducer;

export type RootState = ReturnType<typeof store.getState>;

