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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const Users_1 = require("../models/Users");
const router = (0, express_1.Router)();
router.get('/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const user = yield (0, userController_1.fetchUserData)(email);
        res.json(user);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const betData = req.body;
        const bet = new Users_1.User(betData);
        yield bet.createUser();
        res.status(201).json('User Created!');
    }
    catch (error) {
        console.error('Error creating User:', error);
        res.status(500).json({ error: 'Failed to create User' });
    }
}));
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
exports.default = router;
