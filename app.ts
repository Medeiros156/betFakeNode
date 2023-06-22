import express, { Request, Response, NextFunction } from 'express';
var cors = require('cors');
import betRoutes from './src/routes/betRoutes';
import gameRoutes from './src/routes/gameRoutes';
import userRoutes from './src/routes/userRoutes';
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors()); // Add the cors middleware here

app.use('/bets', betRoutes);
app.use('/games', gameRoutes);
app.use('/users', userRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
