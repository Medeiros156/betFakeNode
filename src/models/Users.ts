import { storeUserData } from "../controllers/userController";

class User {
    email: string;
    wallet: number;

    constructor(data: User) {
        this.email = data.email;
        this.wallet = data.wallet;
    }

    async createUser() {
        try {
            await storeUserData(
                this.email
            );
        } catch (error) {
            console.error('Error storing bet data:', error);
            throw error;
        }
    }

}

export { User };
