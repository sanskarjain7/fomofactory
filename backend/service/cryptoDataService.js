import { insertCryptoData } from './coinDataService.js';
import { fetchPrice } from '../controllers/coinController.js';
import { coin } from '../config/index.js';

async function getData() {
    try {
        const dataPromises = coin.map(coin => fetchPrice(coin));
        const prices = await Promise.all(dataPromises);
        await Promise.all(prices.map(data => insertCryptoData(data)));

    } catch (error) {
        console.log('Error:', error);
    }
}

export default getData;