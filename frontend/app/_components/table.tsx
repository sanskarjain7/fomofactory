import React from 'react';
import Image from 'next/image';
import Modal from './modal';
interface CoinPriceProps {
    name: string;
    symbol: string | null;
    timeStamp: String;
    age: number;
    color: string;
    images: {
        png32: string;
        png64: string;
        webp32: string;
        webp64: string;
    };
    exchanges: number;
    markets: number;
    pairs: number;
    categories: string[];
    allTimeHighUSD: number;
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: number;
    links: {
        website: string;
        whitepaper: string;
        twitter: string | null;
        reddit: string | null;
        telegram: string | null;
        discord: string | null;
        medium: string | null;
        instagram: string | null;
        tiktok: string | null;
        youtube: string | null;
        linkedin: string | null;
        twitch: string | null;
        spotify: string | null;
        naver: string | null;
        wechat: string | null;
        soundcloud: string | null;
    };
    rate: number;
    volume: number;
    cap: number;
    liquidity: number;
    delta: {
        hour: number;
        day: number;
        week: number;
        month: number;
        quarter: number;
        year: number;
    };
}

interface CoinPriceTableProps {
    coinData: CoinPriceProps[];
}

const CoinPriceTable: React.FC<CoinPriceTableProps> = ({ coinData }) => {
    let coinDetails = coinData[0]
    return (
        <div className='m-2'>
            <div className='flex justify-between w-full'>
                <div className='flex items-center'>
                    <h1 className='text-2xl'>{coinDetails?.name}</h1>
                    <Image className="ml-2" src={coinDetails?.images.png64} alt={coinDetails?.name} width={60} height={60} />
                </div>
                <div className='flex items-center'>
                    <Modal />
                </div>
            </div>

            <table className="table-fixed border mt-2">
                <thead className='text-[12px]'>
                    <tr className='p-1'>
                        <th className="p-1  border">Time Stamp</th>
                        <th className="p-1  border">Age</th>
                        <th className="p-1  border">Exchanges</th>
                        <th className="p-1  border">Markets</th>
                        <th className="p-1  border">Pairs</th>
                        <th className="p-1  border">All Time High (USD)</th>
                        <th className="p-1  border">Circulating Supply</th>
                        <th className="p-1  border">Total Supply</th>
                        <th className="p-1  border">Max Supply</th>
                        <th className="p-1  border">Rate</th>
                        <th className="p-1  border">Volume</th>
                        <th className="p-1  border">Market Cap</th>
                        <th className="p-1  border">Liquidity</th>
                        <th className="p-1  border">Delta (Hour)</th>
                        <th className="p-1  border">Delta (Day)</th>
                        <th className="p-1  border">Delta (Week)</th>
                        <th className="p-1  border">Delta (Month)</th>
                        <th className="p-1  border">Delta (Quarter)</th>
                        <th className="p-1  border">Delta (Year)</th>
                    </tr>
                </thead>
                <tbody className='text-[10px]'>
                    {coinData.slice(0, 20).map((coinData: CoinPriceProps) =>
                        <tr className='p-1'>
                            <td className="p-1  border">{coinData.timeStamp}</td>
                            <td className="p-1  border">{coinData.age}</td>
                            <td className="p-1  border">{coinData.exchanges}</td>
                            <td className="p-1  border">{coinData.markets}</td>
                            <td className="p-1  border">{coinData.pairs}</td>
                            <td className="p-1  border">{coinData.allTimeHighUSD.toFixed(3)}</td>
                            <td className="p-1  border">{coinData.circulatingSupply}</td>
                            <td className="p-1  border">{coinData.totalSupply}</td>
                            <td className="p-1  border">{coinData.maxSupply}</td>
                            <td className="p-1  border">{coinData.rate.toFixed(3)}</td>
                            <td className="p-1  border">{coinData.volume}</td>
                            <td className="p-1  border">{coinData.cap}</td>
                            <td className="p-1  border">{coinData.liquidity}</td>
                            <td className="p-1  border">{coinData.delta.hour}</td>
                            <td className="p-1  border">{coinData.delta.day}</td>
                            <td className="p-1  border">{coinData.delta.week}</td>
                            <td className="p-1  border">{coinData.delta.month}</td>
                            <td className="p-1  border">{coinData.delta.quarter}</td>
                            <td className="p-1  border">{coinData.delta.year}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default CoinPriceTable;