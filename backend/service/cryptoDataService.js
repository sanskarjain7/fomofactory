import { insertCryptoData } from './coinDataService.js';
import { fetchPrice } from '../controllers/coinController.js';
let coin = ["BTC", "ETH", "BNB", "SOL", "XRP"]
async function getData() {
    try {
        for (let i = 0; i < coin.length; i++) {
            const data = await fetchPrice(coin[i]);
            await insertCryptoData(data);
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

export default getData;