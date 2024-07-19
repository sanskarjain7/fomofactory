'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../../redux/store';
import { openModal, closeModal, selectCoin, Coin, modal } from '../../redux/modalSlice';
import axios from 'axios';
import { setCoinData } from '@/redux/coinDataSlice';


const Modal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const selectedCoin = useSelector((state: RootState) => state.modal.selectedCoin);
    let coin = useAppSelector(modal);
    const coins = [
        { symbol: "BTC", name: "Bitcoin" },
        { symbol: "ETH", name: "Ethereum" },
        { symbol: "BNB", name: "BNB" },
        { symbol: "SOL", name: "Solana" },
        { symbol: "XRP", name: "XRP" }
    ];


    const handleCoinChange = (coin: Coin) => {
        dispatch(selectCoin(coin));
        dispatch(closeModal());
    };

    const handleOpenModal = () => {
        dispatch(openModal());
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const fetchCoinData = async (coinName: string) => {
        try {
            let data = JSON.stringify({
                "coinName": coinName
            });
            let config = {
                method: 'post',
                url: 'http://localhost:4000/single/history',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            let response = await axios(config);
            dispatch(setCoinData(response.data));
        } catch (error) {
            console.log('error', error);
        }

    }
    useEffect(() => {
        if (coin.selectedCoin) {
            fetchCoinData(coin.selectedCoin.name);
        }
    }, [coin.selectedCoin])

    return (
        <div>
            <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Change Coin
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="modal bg-white rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Change Coin</h2>
                        <div>
                            {coins.map((coin) => (
                                <button
                                    key={coin.symbol}
                                    onClick={() => handleCoinChange(coin)}
                                    className={`py-2 px-4 rounded ${selectedCoin === coin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
                                >
                                    {coin.symbol}
                                </button>
                            ))}
                        </div>
                        <button onClick={handleCloseModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;

