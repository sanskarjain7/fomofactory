import React from 'react';
import Image from 'next/image';
interface StockPriceProps {
    stockData: {
        name: string;
        symbol: string | null;
        rank: number;
        age: number;
        color: string;
        png32: string;
        png64: string;
        webp32: string;
        webp64: string;
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
    };
}

const StockPriceTable: React.FC<StockPriceProps> = ({ stockData }) => {
    return (
        <div className='m-2'>
            <h1 className='text-2xl'>{stockData.name} {stockData.symbol || null}</h1>
            <Image src={stockData.png64} alt={stockData.name} width={60} height={60} />
            <table className="table-fixed border mt-2">
                <thead className='text-[12px]'>
                    <tr>
                        {/* <th className="px-2 py-2 border">Name</th>
                    <th className="px-2 py-2 border">Symbol</th> */}
                        <th className="px-2 py-2 border">Rank</th>
                        <th className="px-2 py-2 border">Age</th>
                        {/* <th className="px-2 py-2 border">Color</th>
                    <th className="px-2 py-2 border">PNG32</th>
                    <th className="px-2 py-2 border">PNG64</th>
                    <th className="px-2 py-2 border">WebP32</th>
                    <th className="px-2 py-2 border">WebP64</th> */}
                        <th className="px-2 py-2 border">Exchanges</th>
                        <th className="px-2 py-2 border">Markets</th>
                        <th className="px-2 py-2 border">Pairs</th>
                        <th className="px-2 py-2 border">All Time High (USD)</th>
                        <th className="px-2 py-2 border">Circulating Supply</th>
                        <th className="px-2 py-2 border">Total Supply</th>
                        <th className="px-2 py-2 border">Max Supply</th>
                        <th className="px-2 py-2 border">Rate</th>
                        <th className="px-2 py-2 border">Volume</th>
                        <th className="px-2 py-2 border">Market Cap</th>
                        <th className="px-2 py-2 border">Liquidity</th>
                        <th className="px-2 py-2 border">Delta (Hour)</th>
                        <th className="px-2 py-2 border">Delta (Day)</th>
                        <th className="px-2 py-2 border">Delta (Week)</th>
                        <th className="px-2 py-2 border">Delta (Month)</th>
                        <th className="px-2 py-2 border">Delta (Quarter)</th>
                        <th className="px-2 py-2 border">Delta (Year)</th>
                    </tr>
                </thead>
                <tbody className='text-[10px]'>
                    <tr>
                        {/* <td className="px-2 py-2 border">{stockData.name}</td>
                        <td className="px-2 py-2 border">{stockData.symbol}</td> */}
                        <td className="px-2 py-2 border">{stockData.rank}</td>
                        <td className="px-2 py-2 border">{stockData.age}</td>
                        {/* <td className="px-2 py-2 border">{stockData.color}</td>
                    <td className="px-2 py-2 border">{stockData.png32}</td>
                    <td className="px-2 py-2 border">{stockData.png64}</td>
                    <td className="px-2 py-2 border">{stockData.webp32}</td>
                    <td className="px-2 py-2 border">{stockData.webp64}</td> */}
                        <td className="px-2 py-2 border">{stockData.exchanges}</td>
                        <td className="px-2 py-2 border">{stockData.markets}</td>
                        <td className="px-2 py-2 border">{stockData.pairs}</td>
                        <td className="px-2 py-2 border">{stockData.allTimeHighUSD.toFixed(3)}</td>
                        <td className="px-2 py-2 border">{stockData.circulatingSupply}</td>
                        <td className="px-2 py-2 border">{stockData.totalSupply}</td>
                        <td className="px-2 py-2 border">{stockData.maxSupply}</td>
                        <td className="px-2 py-2 border">{stockData.rate.toFixed(3)}</td>
                        <td className="px-2 py-2 border">{stockData.volume}</td>
                        <td className="px-2 py-2 border">{stockData.cap}</td>
                        <td className="px-2 py-2 border">{stockData.liquidity}</td>
                        <td className="px-2 py-2 border">{stockData.delta.hour}</td>
                        <td className="px-2 py-2 border">{stockData.delta.day}</td>
                        <td className="px-2 py-2 border">{stockData.delta.week}</td>
                        <td className="px-2 py-2 border">{stockData.delta.month}</td>
                        <td className="px-2 py-2 border">{stockData.delta.quarter}</td>
                        <td className="px-2 py-2 border">{stockData.delta.year}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StockPriceTable;