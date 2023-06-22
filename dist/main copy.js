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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// async function fetchBetsData(): Promise<Bet[]> {
//     const prisma = new PrismaClient();
//     try {
//         // Fetch all bets
//         const bets = await prisma.bet.findMany();
//         return bets
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     } finally {
//         await prisma.$disconnect();
//     }
// }
function fetchBetsDataByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            // Fetch bets filtered by user ID
            const bets = yield prisma.bet.findMany({
                where: {
                    authorId: userId,
                },
            });
            return bets;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function fetchBetsDataByGameId(gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            // Fetch bets filtered by game ID
            const bets = yield prisma.bet.findMany({
                where: {
                    gameId: gameId,
                },
            });
            return bets;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function fetchUsersData() {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            // Fetch all bets
            const users = yield prisma.user.findMany();
            return users;
            // console.log(users);
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function fetchUserDataById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            // Fetch user by ID
            const user = yield prisma.user.findUnique({
                where: {
                    userId: userId,
                },
            });
            return user;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function fetchGamesData() {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            // Fetch all bets
            const games = yield prisma.game.findMany();
            return games;
            // console.log(games);
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function fetchGameDataById(gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            // Fetch game by ID
            const game = yield prisma.game.findUnique({
                where: {
                    gameId: gameId,
                },
            });
            return game;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function storeBetData(teamBet, amountBet, gameId, authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const bet = yield prisma.bet.create({
                data: {
                    teamBet,
                    amountBet,
                    gameId,
                    authorId,
                },
            });
            return bet;
        }
        catch (error) {
            console.error('Error storing bet data:', error);
            throw error;
        }
    });
}
function storeGameData(teamA, teamB, oddsA, oddsB, oddsDraw, startDateTime, endDateTime) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const game = yield prisma.game.create({
                data: {
                    teamA,
                    teamB,
                    oddsA,
                    oddsB,
                    oddsDraw,
                    startDateTime,
                    endDateTime,
                },
            });
            return game;
        }
        catch (error) {
            console.error('Error storing game data:', error);
            throw error;
        }
    });
}
function storeUserData(email, password, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const user = yield prisma.user.create({
                data: {
                    email,
                    password,
                    name,
                },
            });
            return user;
        }
        catch (error) {
            console.error('Error storing user data:', error);
            throw error;
        }
    });
}
app.use(express_1.default.json());
// -------------------------------------------GET-----------------------------------------------------
// Route for fetching bets
app.get('/bets/user/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    try {
        const bets = yield fetchBetsDataByUserId(userId);
        res.json(bets);
    }
    catch (error) {
        console.error('Error fetching bets by user ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.get('/bets/game/:gameId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = parseInt(req.params.gameId);
    try {
        const bets = yield fetchBetsDataByGameId(gameId);
        res.json(bets);
    }
    catch (error) {
        console.error('Error fetching bets by user ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route for fetching games
app.get('/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield fetchGamesData();
        res.json(games);
    }
    catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.get('/games/:gameId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = parseInt(req.params.gameId);
    try {
        const game = yield fetchGameDataById(gameId);
        res.json(game);
    }
    catch (error) {
        console.error('Error fetching game by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield fetchUsersData();
        res.json(user);
    }
    catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.get('/users/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    try {
        const user = yield fetchUserDataById(userId);
        res.json(user);
    }
    catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.get('/alldata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const betsDatabyGame = yield fetchBetsDataByGameId(1);
        const betsDatabyUsers = yield fetchBetsDataByUserId(2);
        const usersData = yield fetchUserDataById(1);
        const gamesData = yield fetchGameDataById(2);
        const responseData = {
            betsGame1: betsDatabyGame,
            betsUser2: betsDatabyUsers,
            users: usersData,
            games: gamesData,
        };
        res.json(responseData);
    }
    catch (error) {
        console.log(error);
    }
}));
// -------------------------------------------POST-----------------------------------------------------
app.post('/bets', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamBet, amountBet, gameId, authorId } = req.body;
        const bet = yield storeBetData(teamBet, amountBet, gameId, authorId);
        res.status(201).json(bet);
    }
    catch (error) {
        console.error('Error creating bet:', error);
        res.status(500).json({ error: 'Failed to create bet' });
    }
}));
app.post('/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamA, teamB, oddsA, oddsB, oddsDraw, startDateTime, endDateTime } = req.body;
        const game = yield storeGameData(teamA, teamB, oddsA, oddsB, oddsDraw, startDateTime, endDateTime);
        res.status(201).json(game);
    }
    catch (error) {
        console.error('Error creating game:', error);
        res.status(500).json({ error: 'Failed to create game' });
    }
}));
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name } = req.body;
        const user = yield storeUserData(email, password, name);
        res.status(201).json(user);
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}));
// -------------------------------------------------------------
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
class NewBet {
    constructor(game, selectedTeam, amountBetted) {
        this.game = game;
        this.selectedTeam = selectedTeam;
        this.amountBetted = amountBetted;
    }
}
// class Game {
//     teams: string[];
//     odds: Record<string, number>;
//     constructor(teams: string[], odds: Record<string, number>) {
//         this.teams = teams;
//         this.odds = odds;
//     }
//     getWinningTeam(): string {
//         const { p1, p2, p3 } = this.odds;
//         if (p1 < p2 && p1 < p3) {
//             return this.teams[0];
//         } else if (p2 < p1 && p2 < p3) {
//             return "draw";
//         } else {
//             return this.teams[1];
//         }
//     }
//     getOdds(): Record<string, number> {
//         return this.odds;
//     }
// }
// // Sample usage
// const game = new Game(["Team A", "Team B"], { p1: 3.33, p2: 2.24, p3: 2.56 });
// const selectedTeam = "Team A";
// const amountBetted = 100;
// const bet = new Bet(game, selectedTeam, amountBetted);
// const betResult = bet.calculateBetResult();
// console.log(betResult);
