"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cors = require('cors');
const betRoutes_1 = __importDefault(require("./src/routes/betRoutes"));
const gameRoutes_1 = __importDefault(require("./src/routes/gameRoutes"));
const userRoutes_1 = __importDefault(require("./src/routes/userRoutes"));
const morgan = require('morgan');
const app = (0, express_1.default)();
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(cors()); // Add the cors middleware here
app.use('/bets', betRoutes_1.default);
app.use('/games', gameRoutes_1.default);
app.use('/users', userRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
