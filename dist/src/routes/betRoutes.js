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
const betController_1 = require("../controllers/betController");
const Bet_1 = require("../models/Bet");
const router = (0, express_1.Router)();
router.get('/user/:userEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.params.userEmail;
    try {
        const bets = yield (0, betController_1.fetchBetsDataByUserEmail)(userEmail);
        res.json(bets);
    }
    catch (error) {
        console.error('Error fetching bets by user Email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.get('/game/:gameId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = parseInt(req.params.gameId);
    try {
        const bets = yield (0, betController_1.fetchBetsDataByGameId)(gameId);
        res.json(bets);
    }
    catch (error) {
        console.error('Error fetching bets by user ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.get('/total/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const bets = yield (0, betController_1.fetchTotalBetsDataByUserEmail)(email);
        res.json(bets);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.get('/topBetters', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const topBeteers = yield (0, betController_1.fetchTop5Betters)();
        res.json(topBeteers);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const betData = req.body;
        const bet = new Bet_1.Bet(betData);
        yield bet.createBet();
        res.status(201).json('Bet Created!');
    }
    catch (error) {
        console.error('Error creating bet:', error);
        res.status(500).json({ error: 'Failed to create bet' });
    }
}));
router.delete('/:betId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const betId = parseInt(req.params.betId);
    try {
        yield (0, betController_1.deleteBetById)(betId);
        res.json({ Message: 'Bet deleted successfully!' }).sendStatus(204);
    }
    catch (error) {
        console.error('Error deleting bet:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
