import { Router, Request, Response } from 'express';
import { fetchBetsDataByUserEmail, fetchBetsDataByGameId, storeBetData, deleteBetById, fetchTotalBetsDataByUserEmail, fetchTop5Betters } from '../controllers/betController';
import { Bet } from '../models/Bet';
const router = Router();

router.get('/user/:userEmail', async (req: Request, res: Response) => {
    const userEmail = req.params.userEmail;

    try {
        const bets = await fetchBetsDataByUserEmail(userEmail);
        res.json(bets);
    } catch (error) {
        console.error('Error fetching bets by user Email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/game/:gameId', async (req: Request, res: Response) => {
    const gameId = parseInt(req.params.gameId);

    try {
        const bets = await fetchBetsDataByGameId(gameId);
        res.json(bets);
    } catch (error) {
        console.error('Error fetching bets by user ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/total/:email', async (req: Request, res: Response) => {
    try {
        const email = req.params.email
        const bets = await fetchTotalBetsDataByUserEmail(email);
        res.json(bets);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/topBetters', async (req: Request, res: Response) => {
    try {
        const topBeteers = await fetchTop5Betters();
        res.json(topBeteers);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const betData = req.body;

        const bet = new Bet(betData);

        await bet.createBet();

        res.status(201).json('Bet Created!');
    } catch (error) {
        console.error('Error creating bet:', error);
        res.status(500).json({ error: 'Failed to create bet' });
    }
});

router.delete('/:betId', async (req: Request, res: Response) => {
    const betId = parseInt(req.params.betId);

    try {
        await deleteBetById(betId);
        res.json({ Message: 'Bet deleted successfully!' }).sendStatus(204);
    } catch (error) {
        console.error('Error deleting bet:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;