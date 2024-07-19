import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CoinDataState {
    coinData: any[]; // Adjust the type according to your data structure
}

const initialState: CoinDataState = {
    coinData: [],
};

export const coinDataSlice = createSlice({
    name: 'coinData',
    initialState,
    reducers: {
        setCoinData: (state, action: PayloadAction<any[]>) => {
            state.coinData = [...action.payload, ...state.coinData];
        },
    },
});

export const { setCoinData } = coinDataSlice.actions;

export const selectCoinData = (state: RootState) => state.coinData.coinData;

export default coinDataSlice.reducer;