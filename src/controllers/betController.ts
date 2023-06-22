// import { Bet } from '../models/Bet';
import { Bet as PrismaBet } from '@prisma/client';
import prisma from '../prisma/prismaClient';

interface TopBetters {
    userEmail: string;
    totalAmountBets: number;
}
export async function fetchBetsDataByUserEmail(userEmail: string): Promise<PrismaBet[] | undefined> {

    try {
        // Fetch bets filtered by user ID
        const bets = await prisma.bet.findMany({
            where: {
                userEmail: userEmail,
            },
            orderBy: {
                betStatus: 'desc'
            }
        });
        return bets;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchTotalBetsDataByUserEmail(userEmail: string): Promise<number | undefined> {

    try {
        // Fetch bets filtered by user ID
        const bets = await prisma.bet.findMany({
            where: {
                userEmail: userEmail,
            },
        });

        const totalAmount = bets.reduce((sum, bet) => sum + bet.amountBet, 0);

        return totalAmount;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}


export async function fetchBetsDataByGameId(gameId: number): Promise<PrismaBet[] | undefined> {

    try {
        // Fetch bets filtered by game ID
        const bets = await prisma.bet.findMany({
            where: {
                gameId: gameId,
            },
        });
        return bets;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchTop5Betters(): Promise<TopBetters[] | undefined> {

    try {
        const top5Betters = await prisma.$queryRaw<TopBetters[]>`
      CALL get_top_5_bettors()
        `
            ;

        return top5Betters;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}



export async function storeBetData(teamBet: string, amountBet: number, gameId: number, userEmail: string, oddsValue: number) {
    try {
        const bet = await prisma.bet.create({
            data: {
                teamBet,
                amountBet,
                gameId,
                userEmail,
                oddsValue
            },
        });

        return bet;
    } catch (error) {
        console.error('Error storing bet data:', error);
        throw error;
    }
}

export async function deleteBetById(betId: number) {
    try {
        await prisma.bet.delete({
            where: {
                betId: betId,
            },
        });
    } catch (error) {
        console.error('Error deleting bet:', error);
        throw error;
    }
}