import { Router } from 'express';
import { getRecentEntriesForCoin } from '../controllers/coinController.js';
const router = Router();

router.post('/single/history', async (req, res) => getRecentEntriesForCoin(req, res));

export default router;