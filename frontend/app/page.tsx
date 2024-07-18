'use client'
// import Image from "next/image";
// import Navbar from "./_components/navbar";
// import StockPriceTable from "./_components/table";
// import Script from "next/script";
// import { io } from "socket.io-client";

// export default function Home() {
//   let stockData = {
//     "name": "Bitcoin",
//     "symbol": null,
//     "rank": 1,
//     "age": 5673,
//     "color": "#fa9e32",
//     "png32": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
//     "png64": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png",
//     "webp32": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.webp",
//     "webp64": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.webp",
//     "exchanges": 189,
//     "markets": 2862,
//     "pairs": 879,
//     "categories": [],
//     "allTimeHighUSD": 73781.24185982272,
//     "circulatingSupply": 19726396,
//     "totalSupply": 19726396,
//     "maxSupply": 21000000,
//     "links": {
//       "website": "https://bitcoin.org",
//       "whitepaper": "https://bitcoin.org/bitcoin.pdf",
//       "twitter": null,
//       "reddit": "https://reddit.com/r/bitcoin",
//       "telegram": null,
//       "discord": null,
//       "medium": null,
//       "instagram": null,
//       "tiktok": null,
//       "youtube": null,
//       "linkedin": null,
//       "twitch": null,
//       "spotify": null,
//       "naver": null,
//       "wechat": null,
//       "soundcloud": null
//     },
//     "rate": 64213.65979026617,
//     "volume": 34543648656,
//     "cap": 1266704081632,
//     "liquidity": 1230717668,
//     "delta": {
//       "hour": 1.0068,
//       "day": 1.0233,
//       "week": 1.1188,
//       "month": 0.9561,
//       "quarter": 1.0264,
//       "year": 2.131
//     }
//   }
//   return (
//     <div>
//       <Script src="https://cdn.socket.io/4.7.5/socket.io.min.js" /><Script strategy="lazyOnload" onLoad={() => {

//         const socket = io('http://localhost:4000');

//         // Function to subscribe to a specific coin
//         function subscribeToCoin(coinName: string) {
//           socket.emit('subscribeToCoin', coinName);
//         }

//         // Handling incoming data for the subscribed coin
//         socket.on('coinData', (data: any) => {
//           console.log('Received data for coin:', data);
//           // Update your UI here based on the received data
//           // For example, you could update a table or chart displaying the coin's data
//         });

//         // Example of subscribing to updates for a specific coin
//         subscribeToCoin('Bitcoin');

//       }} />
//       <div>
//         <Navbar />
//         <StockPriceTable stockData={stockData} />
//       </div>
//     </div>
//   );
// }


import { use, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { setCoinData, selectCoinData } from '../redux/coinDataSlice'; // Adjust the path as necessary
import { useAppSelector } from '../redux/store'; // Adjust the path as necessary
import Modal from './_components/modal';
// import { selectCoin } from '@/redux/modalSlice';
import { modal, selectCoin } from '@/redux/modalSlice';
// const socket = io('http://localhost:4000'); // Adjust the URL as needed

function CoinDataComponent() {
  const dispatch = useDispatch();
  const coinData = useAppSelector(selectCoinData);
  let coin = useAppSelector(modal);
  useEffect(() => {
    // socket.emit('subscribeToCoin', 'Bitcoin'); // Example: Subscribe to Bitcoin updates
    const socket = io('http://localhost:4000'); // Adjust the URL as needed
    socket.on('hello', (data) => {
      console.log('Received data for coin:', data);
      // dispatch(setCoinData(data));
    });

    return () => {
      socket.off('connection');
      socket.disconnect();
    };
  }, []);

  useEffect(() => {

    console.log('coin', coin.selectedCoin?.name);

    // let coin = useAppSelector(selectCoin);
    // console.log(coin);
  }, [coin.selectedCoin])



  return (
    <div>
      <h1>Coin Data</h1>
      <Modal />
      {coinData.map((entry, index) => (
        <div key={index}>
          <p>{entry.name}: {entry.rate}</p>
        </div>
      ))}
    </div>
  );
}

export default CoinDataComponent;