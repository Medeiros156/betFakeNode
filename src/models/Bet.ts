import { storeBetData } from '../controllers/betController';
import { withdrawBetFromWallet } from '../controllers/userController';


class Bet {
    teamBet: string;
    amountBet: number;
    gameId: number;
    oddsValue: number;
    userEmail: string;


    constructor(data: Bet) {
        // Initialize the class properties based on the provided data
        this.teamBet = data.teamBet;
        this.amountBet = data.amountBet;
        this.gameId = data.gameId;
        this.oddsValue = data.oddsValue;
        this.userEmail = data.userEmail;
    }


    async createBet() {
        try {
            await storeBetData(
                this.teamBet,
                this.amountBet,
                this.gameId,
                this.userEmail,
                this.oddsValue
            );
            withdrawBetFromWallet(this.userEmail, this.amountBet)
        } catch (error) {
            console.error('Error storing bet data:', error);
            throw error;
        }
    }


}













export { Bet };