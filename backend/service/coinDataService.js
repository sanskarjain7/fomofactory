import db from '../db.js';
import Coin from '../models/Coin.js';
async function insertCryptoData(jsonResponse) {
    const document = {
        timeStamp: new Date(),
        name: jsonResponse["name"],
        symbol: jsonResponse["symbol"],
        rank: jsonResponse["rank"],
        age: jsonResponse["age"],
        color: jsonResponse["color"],
        images: {
            png32: jsonResponse["png32"],
            png64: jsonResponse["png64"],
            webp32: jsonResponse["webp32"],
            webp64: jsonResponse["webp64"],
        },
        exchanges: jsonResponse["exchanges"],
        markets: jsonResponse["markets"],
        pairs: jsonResponse["pairs"],
        categories: jsonResponse["categories"],
        allTimeHighUSD: jsonResponse["allTimeHighUSD"],
        circulatingSupply: jsonResponse["circulatingSupply"],
        totalSupply: jsonResponse["totalSupply"],
        maxSupply: jsonResponse["maxSupply"],
        links: jsonResponse["links"],
        rate: jsonResponse["rate"],
        volume: jsonResponse["volume"],
        cap: jsonResponse["cap"],
        liquidity: jsonResponse["liquidity"],
        delta: jsonResponse["delta"]
    };

    await Coin.create(document);
    console.log('Data inserted successfully');
}

export {
    insertCryptoData
}