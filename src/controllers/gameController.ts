import { Game } from '../models/Game';
import prisma from '../prisma/prismaClient';
import { fetchBetsDataByGameId } from './betController';


export async function fetchGamesData(): Promise<Game[]> {

    try {
        // Fetch all bets
        const games = await prisma.game.findMany({
            where: {
                gameStatus: true
            },
            orderBy: {
                endDateTime: 'asc'
            }
        });
        return games
        // console.log(games);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
export async function fetchGamesHistoryData(): Promise<Game[]> {

    try {
        // Fetch all bets
        const games = await prisma.game.findMany({
            where: {
                gameStatus: false
            },
            orderBy: {
                endDateTime: 'asc'
            }
        });
        return games
        // console.log(games);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchGameDataById(gameId: number): Promise<Game | null> {

    try {
        // Fetch game by ID
        const game = await prisma.game.findUnique({
            where: {
                gameId: gameId,
            },
        });
        return game;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

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


export async function storeGameData(teamA: string, teamB: string, oddsA: number, oddsB: number, oddsDraw: number, startDateTime: Date, endDateTime: Date) {
    try {
        const game = await prisma.game.create({
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
    } catch (error) {
        console.error('Error storing game data:', error);
        throw error;
    }
}



async function checkEndgame() {
    const date = new Date()
    const games = await fetchGamesData()
    if (games[0].endDateTime < date) {
        // let winnerTeam = await getGameResult(games[0].gameId)
        // checkBetsResults(games[0])
    }
}

async function checkBetsResults(game: Game) {
    // const betsInGame = fetchBetsDataByGameId(game.gameId)

}


async function getGameResult(gameId: number) {
    console.log(gameId)
    return gameId
}
