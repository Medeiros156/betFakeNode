"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    // GameStatus: boolean;
    constructor(data) {
        // Initialize the class properties based on the provided data
        this.teamA = data.teamA;
        this.teamB = data.teamB;
        this.startDateTime = data.startDateTime;
        this.endDateTime = data.endDateTime;
        this.oddsA = data.oddsA;
        this.oddsDraw = data.oddsDraw;
        this.oddsB = data.oddsB;
        this.scoreA = data.scoreA;
        this.scoreB = data.scoreB;
        // this.GameStatus = true;
    }
}
exports.Game = Game;
