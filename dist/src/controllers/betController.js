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
exports.deleteBetById = exports.storeBetData = exports.fetchTop5Betters = exports.fetchBetsDataByGameId = exports.fetchTotalBetsDataByUserEmail = exports.fetchBetsDataByUserEmail = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
function fetchBetsDataByUserEmail(userEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch bets filtered by user ID
            const bets = yield prismaClient_1.default.bet.findMany({
                where: {
                    userEmail: userEmail,
                },
                orderBy: {
                    betStatus: 'desc'
                }
            });
            return bets;
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
exports.fetchBetsDataByUserEmail = fetchBetsDataByUserEmail;
function fetchTotalBetsDataByUserEmail(userEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch bets filtered by user ID
            const bets = yield prismaClient_1.default.bet.findMany({
                where: {
                    userEmail: userEmail,
                },
            });
            const totalAmount = bets.reduce((sum, bet) => sum + bet.amountBet, 0);
            return totalAmount;
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
exports.fetchTotalBetsDataByUserEmail = fetchTotalBetsDataByUserEmail;
function fetchBetsDataByGameId(gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch bets filtered by game ID
            const bets = yield prismaClient_1.default.bet.findMany({
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
            yield prismaClient_1.default.$disconnect();
        }
    });
}
exports.fetchBetsDataByGameId = fetchBetsDataByGameId;
function fetchTop5Betters() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const top5Betters = yield prismaClient_1.default.$queryRaw `
      CALL get_top_5_bettors()
        `;
            return top5Betters;
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
exports.fetchTop5Betters = fetchTop5Betters;
function storeBetData(teamBet, amountBet, gameId, userEmail, oddsValue) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bet = yield prismaClient_1.default.bet.create({
                data: {
                    teamBet,
                    amountBet,
                    gameId,
                    userEmail,
                    oddsValue
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
exports.storeBetData = storeBetData;
function deleteBetById(betId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prismaClient_1.default.bet.delete({
                where: {
                    betId: betId,
                },
            });
        }
        catch (error) {
            console.error('Error deleting bet:', error);
            throw error;
        }
    });
}
exports.deleteBetById = deleteBetById;
