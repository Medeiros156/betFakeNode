

class Game {
    teamA: string;
    teamB: string;
    startDateTime: Date;
    endDateTime: Date;
    oddsA: number;
    oddsDraw: number;
    oddsB: number;
    scoreA: number | null;
    scoreB: number | null;
    // GameStatus: boolean;

    constructor(data: Game) {
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

    // Add additional methods or functionality specific to the Game class
}

export { Game };
