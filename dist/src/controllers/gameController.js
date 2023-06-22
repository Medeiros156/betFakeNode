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
exports.storeGameData = exports.fetchGameDataById = exports.fetchGamesHistoryData = exports.fetchGamesData = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
function fetchGamesData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch all bets
            const games = yield prismaClient_1.default.game.findMany({
                where: {
                    gameStatus: true
                },
                orderBy: {
                    endDateTime: 'asc'
                }
            });
            return games;
            // console.log(games);
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        finally {
            yield prismaClient_1.default.$disconnect();
        }
    });
}
exports.fetchGamesData = fetchGamesData;
function fetchGamesHistoryData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch all bets
            const games = yield prismaClient_1.default.game.findMany({
                where: {
                    gameStatus: false
                },
                orderBy: {
                    endDateTime: 'asc'
                }
            });
            return games;
            // console.log(games);
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        finally {
            yield prismaClient_1.default.$disconnect();
        }
    });
}
exports.fetchGamesHistoryData = fetchGamesHistoryData;
function fetchGameDataById(gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch game by ID
            const game = yield prismaClient_1.default.game.findUnique({
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
            yield prismaClient_1.default.$disconnect();
        }
    });
}
exports.fetchGameDataById = fetchGameDataById;
// export async function fetchScoresData(): Promise<Score[]> {
//     try {
//         // Fetch all bets
//         const scores = await prisma.score.findMany({});
//         return scores
//         // console.log(games);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     } finally {
//         await prisma.$disconnect();
//     }
// }
function storeGameData(teamA, teamB, oddsA, oddsB, oddsDraw, startDateTime, endDateTime) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const game = yield prismaClient_1.default.game.create({
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
exports.storeGameData = storeGameData;
function checkEndgame() {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date();
        const games = yield fetchGamesData();
        if (games[0].endDateTime < date) {
            // let winnerTeam = await getGameResult(games[0].gameId)
            // checkBetsResults(games[0])
        }
    });
}
function checkBetsResults(game) {
    return __awaiter(this, void 0, void 0, function* () {
        // const betsInGame = fetchBetsDataByGameId(game.gameId)
    });
}
function getGameResult(gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(gameId);
        return gameId;
    });
}
