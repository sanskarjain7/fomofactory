import { Router } from 'express';
import { getRecentEntriesForCoin } from '../controllers/coinController.js';
const router = Router();

// Import the function you want to execute

// Define the endpoint
router.post('/single/history', async (req, res) => getRecentEntriesForCoin(req, res));

export default router;