import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(process.env.PORT, () => console.log('Server up and running...'));
