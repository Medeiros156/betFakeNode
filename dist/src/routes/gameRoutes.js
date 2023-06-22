"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../controllers/gameController");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield (0, gameController_1.fetchGamesData)();
        res.json(games);
    }
    catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.get('/history', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield (0, gameController_1.fetchGamesHistoryData)();
        res.json(games);
    }
    catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// router.get('/scores', async (req: Request, res: Response) => {
//     try {
//         const scores = await fetchScoresData();
//         res.json(scores);
//     } catch (error) {
//         console.error('Error fetching game by ID:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
router.get('/:gameId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = parseInt(req.params.gameId);
    try {
        const game = yield (0, gameController_1.fetchGameDataById)(gameId);
        res.json(game);
    }
    catch (error) {
        console.error('Error fetching game by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamA, teamB, oddsA, oddsB, oddsDraw, startDateTime, endDateTime } = req.body;
        const game = yield (0, gameController_1.storeGameData)(teamA, teamB, oddsA, oddsB, oddsDraw, startDateTime, endDateTime);
        res.status(201).json(game);
    }
    catch (error) {
        console.error('Error creating game:', error);
        res.status(500).json({ error: 'Failed to create game' });
    }
}));
exports.default = router;
