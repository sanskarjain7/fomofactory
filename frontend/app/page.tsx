'use client'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { selectCoinData, setCoinData } from '../redux/coinDataSlice'; // Adjust the path as necessary
import CoinPriceTable from './_components/table';
import { useAppSelector } from '../redux/store'; // Adjust the path as necessary
import Modal from './_components/modal';
import { modal } from '../redux/modalSlice';

function CoinDataComponent() {
  const dispatch = useDispatch();
  const coinData = useAppSelector(selectCoinData);
  let coin = useAppSelector(modal)

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('hello', (data) => {
      console.log('Socket Connected', data);
    });

    socket.on('coinChange', (data) => {
      if (data.name === coin.selectedCoin?.name) {
        dispatch(setCoinData([data]));
      }
    });

    return () => {
      socket.off('hello');
      socket.off('coinChange');
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Coin Data</h1>
      <Modal />
      <CoinPriceTable coinData={coinData} />
    </div>
  );
}

export default CoinDataComponent;