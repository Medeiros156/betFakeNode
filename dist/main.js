"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
app.use(express_1.default.json());
// -------------------------------------------GET-----------------------------------------------------
// Route for fetching bets
// Route for fetching games
// -------------------------------------------POST-----------------------------------------------------
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
