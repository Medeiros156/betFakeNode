import { Router, Request, Response } from 'express';
import { fetchGamesData, fetchGameDataById, storeGameData, fetchGamesHistoryData } from '../controllers/gameController';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const games = await fetchGamesData();
        res.json(games);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/history', async (req: Request, res: Response) => {
    try {
        const games = await fetchGamesHistoryData();
        res.json(games);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// router.get('/scores', async (req: Request, res: Response) => {

//     try {
//         const scores = await fetchScoresData();
//         res.json(scores);
//     } catch (error) {
//         console.error('Error fetching game by ID:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
router.get('/:gameId', async (req: Request, res: Response) => {
    const gameId = parseInt(req.params.gameId);

    try {
        const game = await fetchGameDataById(gameId);
        res.json(game);
    } catch (error) {
        console.error('Error fetching game by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.post('/', async (req: Request, res: Response) => {
    try {
        const { teamA, teamB, oddsA, oddsB, oddsDraw, startDateTime, endDateTime } = req.body;

        const game = await storeGameData(teamA, teamB, oddsA, oddsB, oddsDraw, startDateTime, endDateTime);

        res.status(201).json(game);
    } catch (error) {
        console.error('Error creating game:', error);
        res.status(500).json({ error: 'Failed to create game' });
    }
});


export default router;