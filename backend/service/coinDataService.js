import Coin from '../models/Coin.js';

async function insertCryptoData(jsonResponse) {
    const {
        name, symbol, rank, age, color, png32, png64, webp32, webp64,
        exchanges, markets, pairs, categories, allTimeHighUSD,
        circulatingSupply, totalSupply, maxSupply, links, rate, volume,
        cap, liquidity, delta
    } = jsonResponse;

    const document = {
        timeStamp: new Date(),
        name,
        symbol,
        rank,
        age,
        color,
        images: { png32, png64, webp32, webp64 },
        exchanges,
        markets,
        pairs,
        categories,
        allTimeHighUSD,
        circulatingSupply,
        totalSupply,
        maxSupply,
        links,
        rate,
        volume,
        cap,
        liquidity,
        delta
    };

    try {
        await Coin.create(document);
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

export { insertCryptoData };