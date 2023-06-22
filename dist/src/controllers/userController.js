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
exports.withdrawBetFromWallet = exports.storeUserData = exports.fetchUserData = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
function fetchUserData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prismaClient_1.default.user.findUnique({
                where: {
                    email: email
                }
            });
            return user;
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
exports.fetchUserData = fetchUserData;
function storeUserData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prismaClient_1.default.user.create({
                data: {
                    email
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
exports.storeUserData = storeUserData;
function withdrawBetFromWallet(email, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prismaClient_1.default.user.update({
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
        }
        catch (error) {
            console.error('Error storing user data:', error);
            throw error;
        }
    });
}
exports.withdrawBetFromWallet = withdrawBetFromWallet;
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
