import { Router, Request, Response, request } from 'express';
import { fetchUserData } from '../controllers/userController';
import { User } from '../models/Users';

const router = Router();

router.get('/:email', async (req: Request, res: Response) => {
    try {
        const email = req.params.email
        const user = await fetchUserData(email);
        res.json(user);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const betData = req.body;

        const bet = new User(betData);

        await bet.createUser();

        res.status(201).json('User Created!');
    } catch (error) {
        console.error('Error creating User:', error);
        res.status(500).json({ error: 'Failed to create User' });
    }
});
// router.get('/:userId', async (req: Request, res: Response) => {
//     const userId = parseInt(req.params.userId);

//     try {
//         const user = await fetchUserDataById(userId);
//         res.json(user);
//     } catch (error) {
//         console.error('Error fetching user by ID:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


export default router;