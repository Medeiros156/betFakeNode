import { Prisma } from '@prisma/client';
import { User } from '../models/Users';
import prisma from '../prisma/prismaClient';


export async function fetchUserData(email: string): Promise<Prisma.UserCreateInput | null> {

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });



        return user;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
export async function storeUserData(email: string) {
    try {
        const user = await prisma.user.create({
            data: {
                email
            },
        });

        return user;
    } catch (error) {
        console.error('Error storing user data:', error);
        throw error;
    }
}
export async function withdrawBetFromWallet(email: string, amount: number) {
    try {
        const user = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                wallet: {
                    decrement: amount
                }
            }
        });

        return user;
    } catch (error) {
        console.error('Error storing user data:', error);
        throw error;
    }
}




// export async function fetchUserDataById(userId: number): Promise<User | null> {

//     try {
//         // Fetch user by ID
//         const users = await prisma.$queryRaw<User[]>`SELECT * FROM users WHERE id = ${userId}`
//         if (users.length === 0) {
//             return null; // User not found
//         }

//         const user = users[0];
//         const convertedUser = {
//             ...user,
//             id: Number(user.id)
//         };

//         return convertedUser;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     } finally {
//         await prisma.$disconnect();
//     }
// }


