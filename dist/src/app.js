"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const betRoutes_1 = __importDefault(require("./routes/betRoutes"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', betRoutes_1.default);
app.use('/api', gameRoutes_1.default);
app.use('/api', userRoutes_1.default);
// Error handling middleware
app.use((err, req, res) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
